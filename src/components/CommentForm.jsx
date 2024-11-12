import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../../api";
import { Alert, AlertIcon, Box, Button, Textarea } from "@chakra-ui/react";
function CommentForm({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const userInfo = user;
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!newComment) {
      setError("Please write a comment before posting.");
      return;
    }
    setIsPosting(true);
    setError("");
    const comment = {
      username: userInfo.username,
      body: newComment,
    };
    postComment(article_id, comment)
      .then((response) => {
        setComments((currComment) => [response.result, ...currComment]);
        setNewComment("");
      })
      .catch((err) => {
        setError("Failed to post comment. Please try again later.");
        console.log(err);
      })
      .finally(() => {
        setIsPosting(false);
      });
  }

  if(!userInfo){
    return(
      <Box mb={4}>
        <Alert status="warning" borderRadius={"md"}>
          <AlertIcon />
            Sign in to post a comment.
        </Alert>
      </Box>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Box mb={4}>
          <Alert status="error" borderRadius={"md"}>
            <AlertIcon />
            {error}
          </Alert>
        </Box>
      )}
      <Textarea
        value={newComment}
        onChange={handleChange}
        placeholder="Write a comment..."
        w="full"
        h="150px"
        focusBorderColor="blue.400"
        className="hover:bg-blue-50"
      />

      <Button
        type="submit"
        isLoading={isPosting}
        loadingText="Posting..."
        colorScheme="blue"
        mt={4}
        mb={4}
      >
        Post
      </Button>
    </form>
  );
}
export default CommentForm;
