import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import {
  Alert,
  AlertIcon,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Loading from "./Loading";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(false);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("Article not found");
        } else {
          setError("An unexpected error occured");
        }
      });
  }, [article_id]);
  if (error) {
    return (
      <Box mt={5} mx="auto" maxW="600px">
        <Alert status="error" variant="left-accent" borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={4}>
        <GridItem
          margin={{ base: "10px", md: "50px" }}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          rowSpan={4}
          colSpan={{ base: 1, md: 3 }}
        >
          <Image
            src={article.article_img_url}
            alt={article.title}
            objectFit="cover"
            height={{ base: "300px", md: "500px" }}
            width="100%"
          />
        </GridItem>

        <GridItem
          margin={{ base: "10px", md: "50px" }}
          rowSpan={4}
          colSpan={{ base: 1, sm: 1, md: 2 }}
          padding={4}
          maxHeight={{ base: "300px", sm: "400px", md: "500px" }}
          overflowY={"auto"}
        >
          <Heading mb={2} size="lg">
            {article.title}
          </Heading>
          <Text>Category: {article.topic}</Text>
          <br />
          <Text mb={4} color={"black"} fontSize="xl">
            {article.body}
          </Text>

          <Votes article={article} />
        </GridItem>

        <GridItem
          margin={{ base: "10px", md: "50px" }}
          rowSpan={5}
          colSpan={{ base: 1, md: 3 }}
          padding={4}
        >
          <CommentsList />
        </GridItem>
      </Grid>
    );
  }
}
export default SingleArticle;
