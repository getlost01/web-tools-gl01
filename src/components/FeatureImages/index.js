import React from "react";

import { Box, Circle, Container, Heading, VStack } from "@chakra-ui/react";

import Feature from "./Feature";
import HoverBadge from "components/HoverBadge";
import siteData from "./siteData";

// This is the component for the feature images of the extension which contains the feature cells

function FeatureImages(props) {
  const currentData = siteData[props.site];

  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3rem", md: "6.5rem" }}
      >
        <Heading
          as="h1"
          size="h1"
          color="white"
          pb={{ base: "3rem", md: "6.5rem" }}
          textAlign={{ base: "start", md: "center" }}
        >
          See our features demo
        </Heading>
        <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
          {currentData.map((feature, index) => (
            <Feature
              key={`feat-${index}`}
              heading={feature.heading}
              text={feature.text}
              imageSrc={feature.imgLink}
              imageAlt={`Feature Image ${index}`}
              reverse={index % 2 == 1}
              to={feature.extLink}
            >
              <HoverBadge
                borderRadius="0.75rem"
                p="1rem"
                fontSize="32px"
                position="absolute"
                top="-1rem"
                right="-1rem"
              >
                {feature.iconComponent}
                <Circle
                  size="0.75rem"
                  bg="blue.400"
                  position="absolute"
                  top="0.75rem"
                  right="0.75rem"
                  border="2px"
                  borderColor="white"
                />
              </HoverBadge>
            </Feature>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default FeatureImages;
