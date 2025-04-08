import React, { useEffect, useState } from "react";

export const BlogModule = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?per_page=20");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p className="text-center">Loading articles...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6" id="blogs">
  <div className="text-center mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
      Explore Tech Insights & Stories
    </h1>
    <p className="mt-2 text-gray-600 text-base sm:text-lg">
      Dive into curated blogs by developers and tech enthusiasts from around the world.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {articles.map((article) => (
      <a
        key={article.id}
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
      >
        {article.cover_image && (
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-sm text-gray-600 mb-1">by {article.user.name}</p>
          <p className="text-gray-700 line-clamp-3">
            {article.description || "No description provided."}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>
  )
};


