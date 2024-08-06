import { useState, useEffect } from "react";
import { getArticles } from "../../api";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.article_id} className="all-articles">
            <h2>{article.title}</h2>
            <p>author: {article.author}</p>
            <img src={article.article_img_url} alt="Article images" />
            <p>Comments: {article.comment_count}</p>
            <p>
              Category: {article.topic} | Votes: {article.votes}
            </p>

            <p>{new Date(article.created_at).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Articles;
