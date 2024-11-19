import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { updateArticleVotes } from "../../api";
import {
  Alert,
  AlertIcon,
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/User";

function Votes({ article }) {
  const { user } = useContext(UserContext);
  const userInfo = user;
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

  if (!userInfo) {
    return (
      <Box mb={4}>
        <Alert status="warning" borderRadius={"md"}>
          <AlertIcon />
          Sign in to vote.
        </Alert>
      </Box>
    );
  }
  return (
    <div>
      <HStack>
        <FontAwesomeIcon icon={faVoteYea} color="black" />
        <Text color={"black"}>
          {isNaN(article.votes + votesCount) ? "0" : article.votes + votesCount}
        </Text>
      </HStack>
      <HStack mt={12} spacing={5}>
        <IconButton
          icon={<FontAwesomeIcon icon={faThumbsUp} />}
          onClick={handleUpVote}
          aria-label="Upvote"
          variant="solid"
          colorScheme="green"
          mr={2}
        />
        <IconButton
          icon={<FontAwesomeIcon icon={faThumbsDown} />}
          onClick={handleDownVote}
          aria-label="Downvote"
          variant="solid"
          colorScheme="red"
        />
      </HStack>
    </div>
  );
}
export default Votes;
