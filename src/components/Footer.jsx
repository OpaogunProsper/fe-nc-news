import React from "react";
import { Box, HStack, Text, VStack, Link } from "@chakra-ui/react";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-l, #454545, #000000)"
      color="gray.200"
      marginTop="50px"
      py={2}
      px={{ base: 2, md: 4 }}
    >
      <VStack spacing={6} align="stretch">
        <Text fontSize="l" fontWeight="bold" color="white">
          Be the first to read about our Newsletter
        </Text>
        <FooterForm />
      </VStack>
    </Box>
  );
};

export default Footer;
