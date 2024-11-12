import React from "react";
import { Box, HStack, Text, VStack, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-l, #454545, #000000)"
      color="gray.200"
      marginTop="50px"
      py={6}
      px={{ base: 4, md: 8 }}
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="l" fontWeight="bold" color="white">
          Be the first to read about our Newsletter
        </Text>
        <FooterForm />

        <HStack spacing={4} justify="center" pt={4}>
          <IconButton
            as="a"
            href="https://linkedin.com/in/prosperopaogun"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="whiteAlpha"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://github.com/OpaogunProsper"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            colorScheme="whiteAlpha"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://prosperopaogun.netlify.app/"
            target="_blank"
            aria-label="Portfolio"
            icon={<FaUserCircle />}
            colorScheme="whiteAlpha"
            variant="ghost"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
