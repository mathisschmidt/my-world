import React from 'react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <article className="group">
      <a
        href={`/articles/${article.slug}`}
        className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
      >
        <div className="flex justify-between items-start mb-4">
          <time className="text-sm text-cyan-400 font-medium">
            {formatDate(article.date)}
          </time>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {article.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="px-3 py-1 text-slate-400 text-xs">
              +{article.tags.length - 3} more
            </span>
          )}
        </div>
      </a>
    </article>
  );
}
