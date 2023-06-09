import React, { useState } from "react";
import axios from "axios";

import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useToken,
  FormControl,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { EnvelopeSimple, MapPin } from "phosphor-react";

import { NavLink } from "react-router-dom";
import LogoBlack from "assets/images/brand-logo/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Path for this different extension review pages

const reviewLinks = [
  {
    name: "CP Contest Calendar",
    path: "/review/cpcontestcalendar",
  },
  {
    name: "Vibrant Color Tools",
    path: "/review/vibrantcolortools",
  },
  {
    name: "Site Saver",
    path: "/review/sitesaver",
  },
];

// This is the component for the footer of our pages

function Footer() {
  const [blue400] = useToken("colors", ["blue.400"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Function for handling the form submission

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://extensions-info-api.vercel.app/api/opinion/add`,
        {
          name,
          email,
          opinion,
        }
      );
      toast({
        title: "Opinion submitted.",
        description: "Thank you for your opinion!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log("Response:", response.data);
    } catch (error) {
      toast({
        title: "Opinion submission failure.",
        description: "Some internal issue, please try again later!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setName("");
      setEmail("");
      setOpinion("");
    }
  };

  return (
    <Box bg="gray.100">
      <Container maxW={{ base: "container.sm", xl: "container.xl" }} py="5rem">
        <Stack
          direction={{ base: "column", xl: "row" }}
          alignItems="start"
          spacing="3.75rem"
        >
          <Stack direction={{ base: "column", sm: "row" }} spacing="3.75rem">
            
            {/* Logo & Links */}
            
            <Stack direction="column" spacing="1.5rem">
              <Box py="0.25rem">
                <LogoBlack />
              </Box>
              <Text color={"gray.700"} fontWeight={600}>
                Web Chrome Developers
              </Text>
              <Stack direction="row" spacing="1rem">
                <Link href="https://github.com/getlost01/">
                  <FaGithub size={26} />
                </Link>
                <Link href="https://www.linkedin.com/in/aagam-jain-gl01/">
                  <FaLinkedin size={26} />
                </Link>
              </Stack>
            </Stack>
            
            {/* Contacts Info */}
            
            <Stack direction="column" spacing="1.5rem">
              <Heading color={"gray.700"} as="h3" size="h3">
                Contact info
              </Heading>
              <Stack direction="row" spacing="0.5rem">
                <MapPin size={24} color={blue400} />
                <Text color={"gray.700"} fontWeight={600}>
                  {" "}
                  Kanpur, Uttar Pradesh India
                </Text>
              </Stack>
              <Stack direction="row" spacing="0.5rem">
                <EnvelopeSimple size={24} color={blue400} />
                <Text color={"gray.700"} fontWeight={600}>
                  creator.gl01@gmail.com
                </Text>
              </Stack>
              <Heading color={"gray.700"} as="h3" size="h3">
                Review our extensions
              </Heading>

            {/* Extensions Review links */}

              {reviewLinks.map((link) => {
                return (
                  <Stack
                    key={`stack${link.path}`}
                    direction="row"
                    spacing="0.5rem"
                  >
                    <Button
                      key={`nav${link.path}`}
                      as={NavLink}
                      to={link.path}
                      variant="link"
                      colorScheme="gray"
                      color={"gray.700"}
                      fontWeight={600}
                    >
                      {link.name}
                    </Button>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>

          {/* Email form */}

          <Stack
            direction="column"
            spacing="1.5rem"
            w="100%"
            maxW={{ base: "auto", xl: "560px" }}
          >
            <Heading as="h3" color={"gray.700"} size="h3">
              Share Your Opinion
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="name" marginBottom="4">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  bg="white"
                  required
                />
              </FormControl>
              <FormControl id="email" marginBottom="4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  bg="white"
                  required
                />
              </FormControl>
              <FormControl id="opinion" marginBottom="4">
                <Textarea
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Your message"
                  bg="white"
                  rows={4}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="md"
                isLoading={isLoading}
                loadingText="Loading..."
              >
                {isLoading ? <Spinner size="sm" /> : "Send Opinion"}
              </Button>
            </form>
          </Stack>
        </Stack>
      </Container>
      <Divider borderColor="gray.400" />
      <Container
        maxW="container.xl"
        py="1.25rem"
        color={"gray.700"}
        fontWeight={600}
        textAlign="center"
      >
        ©2023 GL01, All rights reserved
      </Container>
    </Box>
  );
}

export default Footer;
