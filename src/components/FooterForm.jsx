import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const FooterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel fontWeight={"bold"} fontSize={"medium"} color="white">
            Email address
          </FormLabel>
          <Input
            placeholder="Enter your email address"
            variant="filled"
            htmlSize={70}
            width="auto"
            type="email"
          />
        </FormControl>
        <Button
          colorScheme="red"
          color="white"
          bg={"red.700"}
          _hover={{ bg: "red.800" }}
          type="submit"
        >
          Subscribe
        </Button>
      </VStack>
    </form>
  );
};

export default FooterForm;
