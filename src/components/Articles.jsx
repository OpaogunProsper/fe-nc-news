import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Link to={`articles/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>author: {article.author}</p>
            <img src={article.article_img_url} alt={article.title} />
            <p>Comments: {article.comment_count}</p>
            <p>
              Category: {article.topic} | Votes: {article.votes}
            </p>

            <p>{new Date(article.created_at).toLocaleString()}</p>
          </li>
        );
      })}
    </div>
  );
}
export default Articles;
