import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-l, #454545, #000000)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        The page you’re looking for does not seem to exist.
      </Text>

      <Link to="/">
        <Button
          colorScheme="black"
          bgGradient="linear(to-l, #454545, #000000)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
