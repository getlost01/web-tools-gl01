import React from "react";
import { useState } from 'react';
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
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  
  const handleRating = (value) => {
    setRating(value);
  };

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic goes here
    toast({
      title: 'Review submitted.',
      description: 'Thank you for your feedback!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} padding={"2rem"}>
      <Box
      w={{ base: "100%", md: "75%", lg: "60%" }} 
      p={{ base: 4, md: 8 }}
      backgroundColor={"gray.100"}
      borderRadius={"1.5rem"}
      border={"1px solid #ccc"}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Write a Review
        </Text>
        <FormLabel fontWeight={700} color={'gray.600'}>Rate this extension</FormLabel>
        <HStack mb={4}>
          {[...Array(5)].map((_, index) => (
            <Tooltip key={index} label={`${index + 1} star${index > 0 ? 's' : ''}`}>
              <IconButton
                size="lg"
                icon={<FaStar />}
                backgroundColor={"white"}
                color={index < rating ? 'yellow.500' : 'gray.400'}
                onClick={() => handleRating(index + 1)}
                aria-label={`${index + 1} star rating`}
              />
            </Tooltip>
          ))}
        </HStack>
        <FormControl id="feedback" mb={4}>
          <FormLabel fontWeight={700} color={'gray.600'}>Feedback</FormLabel>
          <Textarea
            value={feedback}
            backgroundColor={"white"}
            onChange={handleFeedback}
            placeholder="Write a review..."
            rows={5}
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel fontWeight={700} color={'gray.600'}>Email address</FormLabel>
          <Input value={email} onChange={handleEmail} type="email" backgroundColor={"white"} placeholder="Enter your email" />
        </FormControl>
        <Button onClick={handleSubmit} colorScheme="blue">
          Send Feedback
        </Button>
      </Box>
    </Box>
  );
}

export default ReviewForm;