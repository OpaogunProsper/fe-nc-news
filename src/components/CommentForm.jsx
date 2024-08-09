import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../../api";
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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleChange}
          placeholder="Write a comment..."
        ></textarea>
        <button type="submit">{isPosting ? "Posting..." : "Post"}</button>
      </form>
    </div>
  );
}
export default CommentForm;
