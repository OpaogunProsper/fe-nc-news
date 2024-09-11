import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";
import { Box, Text, SimpleGrid, Image, Button, Heading } from "@chakra-ui/react";
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
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
        {articles.map((article) => {
          return (
            <Box
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              ml="4"
              mr="4"
              key={article.article_id}
            >
              <Image
                w="100%"
                h="350px"
                src={article.article_img_url}
                alt={article.title}
                objectFit="cover"
              />
              <Box p="4">
                <Heading fontSize="2xl" fontWeight="semibold" className="mt-2">
                  {article.title}
                </Heading>
                <Text fontSize="medium" color="black">
                  {article.author} •{" "}
                  {moment(article.created_at).format("DD/MM/YYYY")}
                </Text>

                <Button mt="4" variant="ghost" colorScheme="red">
                  <Link to={`articles/${article.article_id}`}>Read more</Link>
                </Button>
                
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
export default Articles;
