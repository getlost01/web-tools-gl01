import React from "react";

import { Link } from "react-router-dom";
import { Box, Button, Container, Heading, VStack, Image} from "@chakra-ui/react";

function NotFound() {
  return (
    <Box bg="black">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <VStack spacing="2rem" py="4rem">
          <Image
            rounded={["1rem", "1.5rem", "2rem"]}
            src={"/assets/images/404/404.gif"}
            alt={"404"}
            sx={{width: "40rem"}}
          />
          <Button as={Link} to="/" colorScheme="blue">
            Back to Homepage
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default NotFound;
