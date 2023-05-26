import React from "react";

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
} from "@chakra-ui/react";
import {
  EnvelopeSimple,
  MapPin,
} from "phosphor-react";

import LogoBlack from "assets/images/brand-logo/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [blue400] = useToken("colors", ["blue.400"]);

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
              <Text>Web Chrome Developers</Text>
              <Stack direction="row" spacing="1rem">
                <Link href="https://github.com/getlost01/">
                  <FaGithub size={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/aagam-jain-gl01/">
                  <FaLinkedin size={30} />
                </Link>
              </Stack>
            </Stack>
            {/* Contacts */}
            <Stack direction="column" spacing="1.5rem">
              <Heading as="h3" size="h3">
                Contact info
              </Heading>
              <Stack direction="row" spacing="0.5rem">
                <MapPin size={24} color={blue400} />
                <Text> Kanpur, Uttar Pradesh India</Text>
              </Stack>
              <Stack direction="row" spacing="0.5rem">
                <EnvelopeSimple size={24} color={blue400} />
                <Text>creator.gl01@gmail.com</Text>
              </Stack>
            </Stack>
          </Stack>
          {/* Email form */}
          <Stack
            direction="column"
            spacing="1.5rem"
            w="100%"
            maxW={{ base: "auto", xl: "560px" }}
          >
            <Heading as="h3" size="h3">
              Share Your Opinion
            </Heading>
            <Input placeholder="Your name" bg="white" />
            <Input placeholder="Your email" bg="white" />
            <Textarea placeholder="Your opinion" rows={4} bg="white"/>
            <Box>
              <Button colorScheme="blue">Send</Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Divider borderColor="gray.400" />
      <Container maxW="container.xl" py="1.25rem" textAlign="center">
        ©2023 GL01, All rights reserved
      </Container>
    </Box>
  );
}

export default Footer;
