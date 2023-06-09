import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  useToast,
  IconButton,
  Tooltip,
  Spinner,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import NotFound from "pages/NotFound";
import Preloader from "components/Preloader";
import siteData from "./siteData";

// This is the component for the exit form

function ReviewForm() {
  let { extension } = useParams();

  // Show 404 Page if extension page is not valid

  if (
    extension != "vibrantcolortools" &&
    extension != "sitesaver" &&
    extension != "cpcontestcalendar"
  ) {
    return <NotFound />;
  }

  // State variables

  const location = useLocation();
  const [rating, setRating] = useState(0);
  const [feedBack, setFeedBack] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const currentData = siteData[extension];
  const [isPreLoading, setIsPreLoading] = useState(true);

  // useEffects for making the page scroll to top and preloader

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsPreLoading(true);
  }, [extension]);

  // useEffects for stopping the preloader

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsPreLoading(false);
    }, 500);
  }, [isPreLoading]);

  // useEffects for collecting users data who is uninstalling the extension

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    var currDay = new Date();
    var year = currDay.getFullYear();
    var month = String(currDay.getMonth() + 1).padStart(2, "0");
    var day = String(currDay.getDate()).padStart(2, "0");
    var currDay = `${year}-${month}-${day}`;
    if (params.u) {
      axios.post(
        `https://extensions-info-api.vercel.app/api/collect/inactive`,
        {
          extension: currentData.inactiveName,
          userID: params.u,
          day: currDay,
        }
      );
    }
    // console.log(params);
  }, []);

  // Event handlers for form elements

  const handleRating = (value) => {
    setRating(value);
  };

  const handleFeedBack = (event) => {
    setFeedBack(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cookieValue = Cookies.get(currentData.cookies);
      console.log(cookieValue);
      setIsLoading(true);

      const response = await axios.post(
        `https://extensions-info-api.vercel.app/api/reviews/add`,
        {
          rating,
          email,
          feedBack,
          extension,
          userID: cookieValue,
        }
      );

      toast({
        title: "Review submitted",
        description: "Thank you for your feedBack!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setEmail("");
      setFeedBack("");
      setRating(0);

    } catch (error) {
      toast({
        title: "Review submission failure.",
        description: "Some internal issue, please try again later!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Preloader */}

      <Box display={isPreLoading ? "block" : "none"}>
        <Preloader color={"gray.200"} />
      </Box>
      
      {/* Exit Form Container */}

      <Box
        display={isPreLoading ? "none" : "flex"}
        justifyContent={"center"}
        padding={"2rem 1rem"}
      >
        <Box
          w={{ base: "100%", md: "75%", lg: "60%" }}
          p={{ base: 4, md: 8 }}
          backgroundColor={"gray.100"}
          borderRadius={"1.5rem"}
          border={"1px solid #ccc"}
        >

          {/* Exit Form */}

          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Write a Review
          </Text>
          <form onSubmit={handleSubmit}>
            <FormLabel fontWeight={700} color={"gray.600"}>
              Rate our {currentData.name} extension
            </FormLabel>
            <HStack mb={4}>
              {[...Array(5)].map((_, index) => (
                <Tooltip
                  key={index}
                  label={`${index + 1} star${index > 0 ? "s" : ""}`}
                >
                  <IconButton
                    size="lg"
                    icon={<FaStar />}
                    backgroundColor={"white"}
                    color={index < rating ? "yellow.500" : "gray.400"}
                    onClick={() => handleRating(index + 1)}
                    aria-label={`${index + 1} star rating`}
                  />
                </Tooltip>
              ))}
            </HStack>
            <FormControl id="feedBack" mb={4}>
              <FormLabel fontWeight={700} color={"gray.600"}>
                Feedback
              </FormLabel>
              <Textarea
                value={feedBack}
                backgroundColor={"white"}
                onChange={handleFeedBack}
                placeholder="Write a review..."
                rows={5}
                required
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel fontWeight={700} color={"gray.600"}>
                Email address
              </FormLabel>
              <Input
                value={email}
                onChange={handleEmail}
                type="email"
                backgroundColor={"white"}
                required
                placeholder="Enter your email"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="md"
              isLoading={isLoading}
              loadingText="Loading..."
            >
              {isLoading ? <Spinner size="sm" /> : "Send FeedBack"}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default ReviewForm;
