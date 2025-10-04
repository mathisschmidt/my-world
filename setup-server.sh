#!/bin/bash

set -e

echo "=========================================="
echo "Portfolio Website Server Setup Script"
echo "=========================================="
echo ""

if [ -z "$1" ]; then
    echo "Error: Server path not provided"
    echo "Usage: ./setup-server.sh /path/to/deployment"
    exit 1
fi

DEPLOY_PATH=$1

echo "Setting up deployment directory at: $DEPLOY_PATH"
echo ""

sudo mkdir -p "$DEPLOY_PATH"

if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo apt update
    sudo apt install -y nginx
else
    echo "Nginx already installed"
fi

if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
else
    echo "Node.js already installed (version: $(node -v))"
fi

echo "Creating Nginx configuration..."
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    root $DEPLOY_PATH;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOF

if [ ! -f /etc/nginx/sites-enabled/portfolio ]; then
    echo "Enabling Nginx site..."
    sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
fi

if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "Removing default Nginx site..."
    sudo rm /etc/nginx/sites-enabled/default
fi

echo "Testing Nginx configuration..."
sudo nginx -t

echo "Creating restart script..."
sudo tee "$DEPLOY_PATH/restart.sh" > /dev/null <<'EOF'
#!/bin/bash
echo "Restarting Nginx..."
sudo systemctl reload nginx
echo "Deployment complete!"
EOF

sudo chmod +x "$DEPLOY_PATH/restart.sh"

echo "Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

echo ""
echo "=========================================="
echo "Setup complete!"
echo "=========================================="
echo ""
echo "Deployment path: $DEPLOY_PATH"
echo "Nginx config: /etc/nginx/sites-available/portfolio"
echo ""
echo "Next steps:"
echo "1. Configure GitHub secrets in your repository:"
echo "   - SERVER_HOST: Your server IP or domain"
echo "   - SERVER_USERNAME: SSH username"
echo "   - SERVER_SSH_KEY: SSH private key"
echo "   - SERVER_TARGET_PATH: $DEPLOY_PATH"
echo ""
echo "2. Push to master branch to trigger deployment"
echo ""
echo "3. To add SSL/HTTPS, install certbot:"
echo "   sudo apt install certbot python3-certbot-nginx"
echo "   sudo certbot --nginx -d yourdomain.com"
echo ""
