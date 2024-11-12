import {
  Box,
  Text,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";

function Navbar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!user) {
      navigate("/signin");
    } else{
      navigate("/profile")
    }
  };
  return (
    <Box
      as="header"
      className="sticky top-0 z-50 shadow-md"
      bgGradient="linear(to-l, #454545, #000000)"
    >
      <Flex justify="space-between" align="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold" color={"white"}>
          NC NEWS
        </Text>
        <HStack
          spacing={{ base: 4, md: 8, lg: 12 }}
          align="center"
          px={{ base: 4, md: 6 }}
          py={{ base: 2, md: 4 }}
        >
          <Box>
            <Link to="/">
              <Button variant="whiteAlpha" color="white">
                Home
              </Button>
            </Link>
          </Box>
          <Box>
            <Button
              colorScheme="red"
              color="white"
              bg="red.700"
              _hover={{ bg: "red.800" }}
              onClick={handleSignIn}
            >
              {user ? "Profile" : "Sign In"}
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
export default Navbar;
