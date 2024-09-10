import {
  Box,
  Text,
  Flex,
  Button,
  HStack,
  Divider,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box as="header" className="sticky top-0 z-50 shadow-md" bg="black">
      <Flex justify="space-between" align="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold" color={"white"}>
          NC NEWS
        </Text>
        <HStack
          spacing={{ base: 4, md: 8, lg: 12 }}
          align="center"
          px={{ base: 4, md: 6 }}
          py={{ base: 2, md: 4 }}
          bg="black"
        >
          <Box>
            <Link to="/">
              <Button variant="whiteAlpha" color="white">
                Home
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/articles">
              <Button variant="whiteAlpha" color="white" className="ml-6">
                Articles
              </Button>
            </Link>
          </Box>
          <Box>
            <Button colorScheme="red">Account</Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
export default Navbar;
