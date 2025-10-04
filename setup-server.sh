#!/bin/bash

set -e

echo "=========================================="
echo "Portfolio Website Server Setup Script"
echo "=========================================="
echo ""

# Default deployment path
DEPLOY_PATH="${1:-/var/www/portfolio}"
DOMAIN="${2:-_}"

echo "Setting up portfolio website server..."
echo "Deployment path: $DEPLOY_PATH"
echo "Domain: $DOMAIN"
echo ""

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install essential packages
echo "Installing essential packages..."
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Node.js 18.x
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
else
    echo "Node.js already installed (version: $(node -v))"
fi

# Install Nginx
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo apt install -y nginx
    sudo systemctl enable nginx
else
    echo "Nginx already installed"
fi

# Create deployment directory
echo "Creating deployment directory..."
sudo mkdir -p "$DEPLOY_PATH"
sudo mkdir -p /var/www/html

# Set up proper permissions
sudo chown -R www-data:www-data /var/www
sudo chmod -R 755 /var/www

# Create Nginx configuration
echo "Creating Nginx configuration..."
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;
    
    root /var/www/html;
    index index.html index.htm;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Main location
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # API routes (if any)
    location /api/ {
        # Add API configuration here if needed
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        application/atom+xml
        application/geo+json
        application/javascript
        application/x-javascript
        application/json
        application/ld+json
        application/manifest+json
        application/rdf+xml
        application/rss+xml
        application/xhtml+xml
        application/xml
        font/eot
        font/otf
        font/ttf
        image/svg+xml
        text/css
        text/javascript
        text/plain
        text/xml;
}
EOF

# Enable the site
if [ ! -f /etc/nginx/sites-enabled/portfolio ]; then
    echo "Enabling Nginx site..."
    sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
fi

# Remove default site if it exists
if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "Removing default Nginx site..."
    sudo rm /etc/nginx/sites-enabled/default
fi

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Create deployment script
echo "Creating deployment helper script..."
sudo tee "$DEPLOY_PATH/deploy.sh" > /dev/null <<'EOF'
#!/bin/bash

set -e

REPO_DIR="$PWD"
BUILD_DIR="$PWD/dist"
WEB_DIR="/var/www/html"

echo "Starting deployment process..."

# Build the project
echo "Building project..."
npm ci
npm run build

# Backup current deployment (optional)
if [ -d "$WEB_DIR" ] && [ "$(ls -A $WEB_DIR)" ]; then
    echo "Creating backup..."
    sudo cp -r "$WEB_DIR" "${WEB_DIR}.backup.$(date +%Y%m%d_%H%M%S)"
fi

# Deploy new build
echo "Deploying to web directory..."
sudo rm -rf "$WEB_DIR"/*
sudo cp -r "$BUILD_DIR"/* "$WEB_DIR/"

# Set proper permissions
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"

# Reload Nginx
echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🚀 Your portfolio is now live!"
EOF

sudo chmod +x "$DEPLOY_PATH/deploy.sh"

# Install PM2 for process management (optional)
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2 for process management..."
    sudo npm install -g pm2
    sudo pm2 startup
fi

# Install Certbot for SSL (optional)
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot for SSL certificates..."
    sudo snap install core; sudo snap refresh core
    sudo snap install --classic certbot
    sudo ln -sf /snap/bin/certbot /usr/bin/certbot
fi

# Start and enable Nginx
echo "Starting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Set up firewall rules
echo "Configuring firewall..."
if command -v ufw &> /dev/null; then
    sudo ufw allow ssh
    sudo ufw allow 'Nginx Full'
    sudo ufw --force enable
fi

echo ""
echo "=========================================="
echo "✅ Server setup completed successfully!"
echo "=========================================="
echo ""
echo "📁 Deployment path: $DEPLOY_PATH"
echo "🌐 Web root: /var/www/html"
echo "⚙️  Nginx config: /etc/nginx/sites-available/portfolio"
echo "🚀 Deploy script: $DEPLOY_PATH/deploy.sh"
echo ""
echo "Next steps:"
echo ""
echo "1. 🔐 Set up GitHub repository secrets:"
echo "   - SERVER_HOST: Your server IP or domain"
echo "   - SERVER_USER: SSH username (usually ubuntu or root)"
echo "   - SSH_PRIVATE_KEY: Your SSH private key"
echo "   - SERVER_PATH: $DEPLOY_PATH"
echo ""
echo "2. 🔒 Enable SSL (recommended):"
echo "   sudo certbot --nginx -d yourdomain.com"
echo ""
echo "3. 📊 Monitor logs:"
echo "   sudo tail -f /var/log/nginx/access.log"
echo "   sudo tail -f /var/log/nginx/error.log"
echo ""
echo "4. 🔄 Manual deployment:"
echo "   cd $DEPLOY_PATH && ./deploy.sh"
echo ""
echo "5. 🎉 Push to main/master branch to trigger automatic deployment!"
echo ""
