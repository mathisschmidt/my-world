export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export function fromAstroMdx(article: any): Article {
    return {
        ...article.data,
        slug: article.slug
    }
}