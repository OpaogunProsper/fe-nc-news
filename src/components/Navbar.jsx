import { Box, Text, Flex, Button, HStack, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
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
            <Menu>
              <MenuButton
                as={Button}
                variant="whiteAlpha"
                color="white"
                className="ml-6"
              >
                Topics
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/articles/football">
                  Football
                </MenuItem>
                <MenuItem as={Link} to="/articles/coding">Coding</MenuItem>
                <MenuItem as={Link} to="/articles/cooking">Cooking</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Button
              colorScheme="red"
              color="white"
              bg="red.700"
              _hover={{ bg: "red.800" }}
            >
              Account
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
export default Navbar;
