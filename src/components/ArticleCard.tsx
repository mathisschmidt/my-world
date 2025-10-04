import React from 'react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <a
      href={`/articles/${article.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <span className="text-sm text-gray-500">{article.date}</span>
      </div>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};
