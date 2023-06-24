import React, { useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";

// This is the component for the preloader

const Preloader = (props) => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={props.color}
      position="absolute"
      zIndex={100}
    >
      <Spinner thickness="6px" speed="0.5s" color="blue.300" size="xl" />
    </Box>
  );
};

export default Preloader;
