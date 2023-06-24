import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Circle,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import HoverBadge from "components/HoverBadge";
import Preloader from "components/Preloader";
import siteData from "./siteData";

// This is the component for the landing section of the extension so called the hero section

function Hero(props) {
  const currentData = siteData[props.site];
  const [isLoading, setIsLoading] = useState(true);

  // useEffects for making the page scroll to top and preloader

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
  }, [props.site]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {/* Preloader */}

      <Box display={isLoading ? "block" : "none"}>
        <Preloader color={"gray.900"} />
      </Box>

      <Box bg="gray.900" display={isLoading ? "none" : "block"}>
        <Container
          maxW={{ base: "container.sm", xl: "container.xl" }}
          pt={{ base: "3rem", md: "6rem", xl: "8.75rem" }}
          pb={{ base: "3rem", xl: "16.25rem" }}
        >
          <Stack
            direction={{ base: "column", xl: "row" }}
            justifyContent={{
              base: "start",
              md: "center",
              xl: "space-between",
            }}
            alignItems={{ base: "center", xl: "end" }}
            spacing={{ base: "3rem", xl: "7rem" }}
          >

            {/*Extensions Text */}

            <VStack
              alignItems={{ base: "start", md: "center", xl: "start" }}
              textAlign={{ base: "start", md: "center", xl: "start" }}
              spacing="3rem"
            >
              <VStack spacing="1rem">
                <Heading as="h1" size="h1" color="white">
                  {currentData.heading}
                </Heading>
                <Text color="white" lineHeight="1.5">
                  {currentData.innerText}
                </Text>
              </VStack>
              <Wrap spacing="1.1rem">
                <WrapItem>
                  <Button
                    as="a"
                    target="_blank"
                    href={currentData.link}
                    colorScheme="blue"
                  >
                    <Image
                      src="assets/images/hero/chrome-logo.svg"
                      alt=""
                      sx={{ px: 2, pr: 3 }}
                    />
                    Add to Chrome
                  </Button>
                </WrapItem>
              </Wrap>
            </VStack>

            {/*Extensions Image */}
            
            <Box w="100%" maxW="543px" p={{ base: "1rem", md: "0" }}>
              <Box position="relative">
                <Image
                  src={currentData.banner}
                  alt=""
                  width={"40rem"}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid #555",
                  }}
                />

                {/* Active Badge */}

                <HoverBadge position="absolute" right="-1rem" top="-1rem">
                  <Circle size="8px" bg="Green" />
                  <Text>Active</Text>
                </HoverBadge>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
