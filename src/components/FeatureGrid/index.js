import React from "react";
import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import FeatureCell from "./FeatureCell";
import siteData from "./siteData";


function FeatureGrid(props) {
  const currentData = siteData[props.site];


  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3rem", md: "6.5rem" }}
    >
      <VStack spacing={{ base: "3rem", md: "7.5rem" }}>
        {/* Heading */}
        <VStack
          spacing="1rem"
          alignItems={{ base: "start", md: "center" }}
          textAlign={{ base: "start", md: "center" }}
        >
          <Heading as="h1" size="h1">
            About this Extension
          </Heading>
          <Text lineHeight="1.5">
          Enhanced your productivity and efficiency in web browsing with the facilities like these.
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "3rem", md: "5rem", xl: "7.5rem" }}
          maxW="57rem"
        >
          {currentData.map((feature, index) => (
            <FeatureCell key={`feature-${index}`} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default FeatureGrid;
