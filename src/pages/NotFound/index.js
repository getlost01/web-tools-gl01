import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Box, Button, Container, Heading, VStack, Image} from "@chakra-ui/react";
import Preloader from "components/Preloader";

function NotFound() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  return (
    <>
    <Box display={isLoading?"block":"none"}>
        <Preloader color={"gray.900"}/>
    </Box>
    <Box bg="black" display={isLoading?"none":"block"}>
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
  </>
  );
}

export default NotFound;
