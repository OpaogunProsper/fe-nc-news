import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import newsImage from "../assets/nc-diagram.png";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Checking if there's a saved user in  the localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Reuse the users data
      navigate("/"); 
    }
  }, [setUser, navigate]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !name) {
      setError("Both fields are required.");
      return;
    }
    try {
      const response = await fetch(
        "https://nc-news-676h.onrender.com/api/users"
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();

      const users = Array.isArray(data.users)
        ? data.users
        : Array.isArray(data);
      if (!users) {
        throw new Error("Data structure is not as expected");
      }

      const user = users.find(
        (u) => u.username === username && (!name || u.name === name)
      );

      if (user) {
        setUser(user);
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          sessionStorage.setItem("user", JSON.stringify(user));
        }
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Sign in error:", error);
    }
  };

  return (
    <Flex
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      className="bg-gray-100"
    >
      {/* Left side */}
      <Box
        w="full"
        maxW="500px"
        className="relative bg-gray-200 flex-1 rounded-l-lg"
      >
        <img
          src={newsImage}
          alt="News Diagram"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </Box>

      {/* Right side with */}
      <Box
        w="full"
        maxW="500px"
        p="8"
        bg="white"
        borderRadius="lg"
        shadow="lg"
        className="flex-1 bg-white rounded-r-lg"
      >
        <Heading as="h2" size="xl" mb="6" textAlign="center">
          Welcome to NC News!
        </Heading>
        <form onSubmit={handleSignIn} className="space-y-6">
          <FormControl isInvalid={error}>
            <FormLabel
              htmlFor="username"
              className="text-lg font-semibold text-gray-700"
            >
              Username
            </FormLabel>
            <Input
              id="username"
              type="text"
              marginBottom={4}
              placeholder="tickle122"
              value={username}
              onChange={handleUsernameChange}
              className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={error}>
            <FormLabel
              htmlFor="name"
              className="text-lg font-semibold text-gray-700"
            >
              Name
            </FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Tom Tickle"
              value={name}
              marginBottom={4}
              onChange={handleNameChange}
              className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <Checkbox
            paddingBottom={4}
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            >
              Remember Me
            </Checkbox>
          </FormControl>
          <Button
            type="submit"
            colorScheme="red"
            className="w-full py-3 rounded-lg mt-6 text-white font-semibold shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sign In
          </Button>

          {error && (
            <p className="text-red-500 text-center mt-2 text-sm">{error}</p>
          )}
        </form>
      </Box>
    </Flex>
  );
};

export default SignIn;
