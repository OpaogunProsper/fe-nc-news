import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  CardFooter,
  Button
  
} from "@chakra-ui/react";
import moment from "moment";
import { deleteComment } from "../../api";

function SingleComment({ comment, setComments, comment_id}) {
 
  function handleDelete () {
    deleteComment(comment_id)
    .then(() => {
    setComments((currComments) =>
    currComments.filter((current) => current.comment_id !== comment_id)
  )
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  return (
    <Card margin={4}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems={"center"} flexWrap="wrap">
            <Avatar name={comment.author} />

            <Box>
              <Heading size="sm">{comment.author}</Heading>
              <Text>
                {" "}
                {comment.votes} votes • {moment(comment.created_at).fromNow()}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{comment.body}</Text>
      </CardBody>

      {/* delete and edit button when sorted  */}
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button onClick={handleDelete} flex="1" variant="ghost">
          Delete
        </Button>
        
        {/* <Button flex="1" variant="ghost">
          Edit
        </Button> */}
      </CardFooter>
    </Card>
  );
}
export default SingleComment;
