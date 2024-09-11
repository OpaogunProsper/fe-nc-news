import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";
import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import Loading from "./Loading";
import moment from "moment";
import NewsSlide from "./NewsSlide";
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
    return <Loading />;
  }
  return (
    <>
      <NewsSlide />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {articles.map((article) => {
          return (
            <Box
              key={article.article_id}
              className="p-4 bg-white rounded-lg shadow"
            >
              <Text fontSize="xl" fontWeight="semibold" className="mt-2">
                {article.title}
              </Text>

              <p>author: {article.author}</p>
              <Image
                maxW={{ base: "100%", sm: "400px" }}
                src={article.article_img_url}
                alt={article.title}
                className="w-full h-auto object-cover rounded"
              />
              <Text className="mt-2 text-gray-600">
                Comments: {article.comment_count}
              </Text>
              <Text className="mt-2 text-gray-600">
                {article.topic} • {moment(article.created_at).fromNow()}
              </Text>

              <Button>
                <Link to={`articles/${article.article_id}`}>Read more</Link>
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
export default Articles;
