function SingleComment({ comment }) {
  return (
    <div>
      <strong>{comment.author}</strong>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </div>
  );
}
export default SingleComment;
