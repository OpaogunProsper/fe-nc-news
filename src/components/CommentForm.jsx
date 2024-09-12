import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../../api";
import { Button, Textarea } from "@chakra-ui/react";
function CommentForm({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const [userInfo] = user;
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!newComment) {
      return;
    }
    setIsPosting(true);

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
        console.log(err);
      })
      .finally(() => {
        setIsPosting(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
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
