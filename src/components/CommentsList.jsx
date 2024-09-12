import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../api";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import Loading from "./Loading";
import { Heading, HStack, Text } from "@chakra-ui/react";

function CommentsList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getComments(article_id).then((comment) => {
      setComments(comment);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <HStack>
          <Heading size="md" mb={2}>
            Comments
          </Heading>
          <Text as="sup" fontSize="sm">
            2
          </Text>
        </HStack>
        <CommentForm setComments={setComments} article_id={article_id} />

        {comments.map((comment) => (
          <SingleComment
            setComments={setComments}
            comment={comment}
            key={comment.comment_id}
          />
        ))}
      </>
    );
  }
}
export default CommentsList;
