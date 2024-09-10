import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import { Box, Image, Text } from "@chakra-ui/react";

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
      <Box className="bg-white shadow-md rounded-lg overflow-hidden">
        <div>
          <Image
            src={article.article_img_url}
            alt={article.title}
            className="w-full h-auto object-cover rounded"
          />
          <Text className="w-full h-48 object-cover">{article.title}</Text>
          <p> Author: {article.author}</p>
          <Text className="text-gray-600 mt-2">
            {article.body}
          </Text>
          <p>{new Date(article.created_at).toLocaleString()}</p>
          <p>Category: {article.topic}</p>
          <Votes article={article} />
        </div>
        <CommentsList />
      </Box>
    );
  }
}
export default SingleArticle;
