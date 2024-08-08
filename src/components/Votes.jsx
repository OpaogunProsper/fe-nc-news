import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateArticleVotes } from "../../api";

function Votes({ article }) {
  const [votesCount, setVotesCount] = useState(0);
  const { article_id } = useParams();
  const [error, setError] = useState("");
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  function handleUpVote() {
    if (!hasUpvoted && !hasDownvoted) {
      setVotesCount((currVote) => {
        return currVote + 1;
      });
      setHasUpvoted(true);
      let increment = 1;
      updateArticleVotes(article_id, increment).catch((err) => {
        setVotesCount((currVote) => {
          return currVote - 1;
        });
        setError("Try again");
        setHasUpvoted(false);
      });
    }
  }

  function handleDownVote() {
    if (!hasUpvoted && !hasDownvoted) {
      setVotesCount((currVote) => {
        return currVote - 1;
      });
      setHasDownvoted(true);
      let increment = -1;
      updateArticleVotes(article_id, increment).catch((err) => {
        setVotesCount((currVote) => {
          return currVote + 1;
        });
        setError("Try again");
        setHasDownvoted(false);
      });
    }
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>Votes: {article.votes + votesCount}</div>
      <button onClick={handleUpVote}>UpVote</button>
      <button onClick={handleDownVote}>downVote</button>
    </div>
  );
}
export default Votes;
