import type {Article} from "../../data/articles.ts";
import ArticleCard from "../ArticleCard.tsx";
import React, {useEffect} from "react";

interface ArticleListProps {
    articles: Article[];
    tags: string[];
}

export default function ArticleList({ articles, tags }: ArticleListProps) {
    const [selectedTags, setSelectedTags] = React.useState<string[] | null>(null);
    const [filteredArticles, setFilteredArticles] = React.useState<Article[]>(articles);

    useEffect(() => {
        if (selectedTags === null) {
            setFilteredArticles(articles);
        } else {
            const filtered = articles.filter(article =>
                article.tags.some(tag => selectedTags.includes(tag))
            );
            setFilteredArticles(filtered);
        }
    }, [selectedTags, articles])

    function ToggleTag(tag: string) {
        if (selectedTags === null) {
            setSelectedTags([tag]);
        } else if (selectedTags.includes(tag)) {
            const newTags = selectedTags.filter(t => t !== tag);
            setSelectedTags(newTags.length > 0 ? newTags : null);
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }


    return (
        <>
            {/* Filter Tags */}
            <section className="max-w-6xl mx-auto mb-12">
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                            selectedTags == null
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700'
                        }`}
                        onClick={() => setSelectedTags(null)}
                    >
                        All Articles
                    </button>
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                selectedTags && selectedTags.includes(tag)
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700'
                            }`}
                            onClick={() => ToggleTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </section>

            {/*Articles Grid*/}
            <section className="max-w-6xl mx-auto">
                <div id="articles-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <div className="transition-all duration-300 ease-in-out" key={article.slug}>
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}