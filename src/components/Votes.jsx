import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateArticleVotes } from "../../api";

function Votes({ article }) {
  const [votesCount, setVotesCount] = useState(0);
  const { article_id } = useParams();
  const [error, setError] = useState("");
  function handleUpVote() {
    setVotesCount((currVote) => {
      return currVote + 1;
    });
    let increment = 1;
    updateArticleVotes(article_id, increment).catch((err) => {
      setVotesCount((currVote) => {
        return currVote - 1;
      });
      setError("Try again");
    });
  }

  function handleDownVote() {
    setVotesCount((currVote) => {
      return currVote - 1;
    });
    let increment = -1;
    updateArticleVotes(article_id, increment)
      .then()
      .catch((err) => {
        setVotesCount((currVote) => {
          return currVote + 1;
        });
        setError("Try again");
      });
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
