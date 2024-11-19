import React, { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Button, Box, Avatar, Text, AvatarBadge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/signin");
  };

  if (!user) {
    return (
      <Box
        bg="red.100"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="max-w-sm mx-auto mt-8"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="red.700"
          className="text-center"
        >
          You must be signed in to view your profile.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      textAlign="center"
      mt={20}
      px={{ base: 4, md: 8 }}
      width="full"
      mx={"auto"}
      display={"block"}
      my={4}
      maxW="lg"
      minHeight={"100vh"}
    >
      <Avatar
        size={{ base: "xl", md: "2xl" }}
        src={user.avatar_url}
        alt={user.name}
        mb={4}
        mx={"auto"}
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
        {user.name}
      </Text>
      <Text fontSize={{ base: "md", md: "xl" }} color="gray.500">
        @{user.username}
      </Text>
      <Button colorScheme="blackAlpha" onClick={signOut} marginTop="70px" width={"full"}>
        Sign Out
      </Button>
    </Box>
  );
}

export default ProfilePage;
