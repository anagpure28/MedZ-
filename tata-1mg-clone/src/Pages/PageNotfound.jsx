import React from 'react'
import Navbar from '../Component/Navbar'
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Footer from './Footer'
import { Link } from 'react-router-dom';

function PageNotfound() {
  return (
    <div>
      <Navbar />
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          mt={"4%"}
          bgGradient="linear(to-r, pink.400, orange.400)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link to="/">
          <Button
            colorScheme="orange"
            bgGradient="linear(to-r, pink.400, orange.400)"
            color="white"
            variant="solid">
            Go to Home
          </Button>
        </Link>
      </Box>
      <Footer />
    </div>
  )
}

export default PageNotfound