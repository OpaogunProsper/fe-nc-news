import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../api";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";

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
    return <p>Loading...</p>;
  } else {
    return (
      <ul className="comments-list">
        <h3 className="comment-header">Comments</h3>
        <CommentForm setComments={setComments} article_id={article_id} />

        {comments.map((comment) => (
          <SingleComment
            setComments={setComments}
            comment={comment}
            key={comment.comment_id}
          />
        ))}
      </ul>
    );
  }
}
export default CommentsList;
