import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Loading from "./Loading";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem
          margin="50px"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          rowSpan={4}
          colSpan={3}
        >
          <Image
            src={article.article_img_url}
            alt={article.title}
            objectFit="cover"
            height="500px"
            width="100%"
          />
        </GridItem>

        <GridItem margin="50px" rowSpan={4} colSpan={2} padding={4}>
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

        <GridItem margin="50px" rowSpan={5} colSpan={3} padding={4}>
          <CommentsList />
        </GridItem>
      </Grid>
    );
  }
}
export default SingleArticle;
