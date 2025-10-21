import {getCollection} from "astro:content";

export interface ArticleInterface {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export class Article implements ArticleInterface {
    /* TODO: Perf, cached the articles list, will never changed like all other static getter*/

    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: string;

    constructor(
        slug: string,
        title: string,
        description: string,
        date: string,
        tags: string[],
        content: string
    ) {
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.date = date;
        this.tags = tags;
        this.content = content;
    }

    static async getAllArticles(): Promise<Article[]> {
        /* Sorted newest to oldest */
        const rawArticles = await getCollection('articles');

        const articles = rawArticles.map((article) => {
            return this.fromAstroMdx(article);
        });

        return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    static async getAllTags(): Promise<Array<string>> {
        /* Sorted by alphabetic order */
        const articles = await this.getAllArticles();

        const allTags = [...new Set(articles.flatMap(article => article.tags))];

        return allTags.sort((a, b) => a.localeCompare(b));
    }

    static async oldestDate(): Promise<number> {
        const articles = await this.getAllArticles();
        return new Date(articles[articles.length - 1].date).getFullYear()
    }

    static fromAstroMdx(article: any): Article {
        return {
            ...article.data,
            slug: article.slug
        }
    }
}