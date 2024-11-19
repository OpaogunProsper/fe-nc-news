import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
  Heading,
  HStack,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Loading from "./Loading";
import moment from "moment";
import NewsSlide from "./NewsSlide";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("votes");
  const [order, setOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(sortBy, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error line 20 articles file");
      });
  }, [sortBy, order]);
  const breakpoint = useBreakpointValue({
    base: "mobile",
    md: "desktop",
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <NewsSlide articles={articles} />

      <Box paddingBottom={4} borderRadius="md" className="shadow-lg">
        {breakpoint === "mobile" ? (
          <Box display="flex" justifyContent={"center"} width={"100%"}>
          <Menu>
            <MenuButton as={Button} colorScheme="red" variant="outline">
              Sort Options
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSortBy("created_at")}>
                Sort by Date
              </MenuItem>
              <MenuItem onClick={() => setSortBy("comment_count")}>
                Sort by Comments
              </MenuItem>
              <MenuItem onClick={() => setSortBy("votes")}>
                Sort by Votes
              </MenuItem>
              <MenuItem
                onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
              >
                Toggle Order ({order === "asc" ? "Descending" : "Ascending"})
              </MenuItem>
            </MenuList>
          </Menu>
          </Box>
        ) : (
          <HStack mb={4} justify={"center"} width={"100%"}>
            <Button
              variant={sortBy === "created_at" ? "solid" : "outline"}
              colorScheme="red"
              onClick={() => setSortBy("created_at")}
            >
              Sort by Date
            </Button>
            <Button
              variant={sortBy === "comment_count" ? "solid" : "outline"}
              colorScheme="red"
              onClick={() => setSortBy("comment_count")}
            >
              Sort by Comments
            </Button>
            <Button
              variant={sortBy === "votes" ? "solid" : "outline"}
              colorScheme="red"
              onClick={() => setSortBy("votes")}
            >
              Sort by Votes
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
            >
              Toggle Order ({order === "asc" ? "Descending" : "Ascending"})
            </Button>
          </HStack>
        )}
      </Box>

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
