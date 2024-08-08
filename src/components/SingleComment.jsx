function SingleComment({ comment }) {
  return (
    <div className="comment-info">
      <p className="comment-author">{comment.author}</p>
      <p>
        {comment.votes} votes • {new Date(comment.created_at).toLocaleString()}
      </p>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
    </div>
  );
}
export default SingleComment;
