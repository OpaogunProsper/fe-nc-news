import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import Votes from "./Votes";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false)
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div>
          <h2>{article.title}</h2>
          <p> Author: {article.author}</p>
          <p>{article.body}</p>
          <p>{new Date(article.created_at).toLocaleString()}</p>
          <p>Category: {article.topic}</p>
          <img src={article.article_img_url} alt={article.title} />
          <Votes article={article} />
        </div>
        <CommentsList />
      </div>
    );
  }
}
export default SingleArticle;
