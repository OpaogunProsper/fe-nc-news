import React, { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Button, Box, Avatar, Text, AvatarBadge } from "@chakra-ui/react";

function ProfilePage() {
  const { user, setUser } = useContext(UserContext);

  const signOut = () => {
    setUser(null);
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
      height={700}
      width={700}
      mx={"auto"}
      display={"block"}
      my={4}
    >
      <Avatar size="2xl" src={user.avatar_url} alt={user.name} mb={4}>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Text fontSize="3xl" fontWeight="bold">
        {user.name}
      </Text>
      <Text fontSize="xl" color="gray.500">
        @{user.username}
      </Text>
      <Button colorScheme="blackAlpha" onClick={signOut} marginTop="70px">
        Sign Out
      </Button>
    </Box>
  );
}

export default ProfilePage;
