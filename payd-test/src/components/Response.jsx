import React, { useEffect, useState } from 'react';
import { Box, Button, Image, Heading, Text, Divider, Stack, Card, CardBody, CardFooter, SimpleGrid, HStack } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from './Navbar'

function Response() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Function to get results from the API immediately when the page loads
  useEffect(() => {
  	setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
      	setLoading(false)
        setResponse(res.data);
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.err || "An error occurred when fetching data";
        setError(errorMessage);
      });
  }, []);

  // Calculate the number of pages
  const totalPages = Math.ceil(response.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = response.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
  	<div>
  	<Navbar/>
    <Box p={4}>
      {error && <Text color="red.500">{error}</Text>}
      {loading && <p>loading....</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {currentItems.map((post, index) => (
          <Card key={index} maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Sample image"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Title</Heading>
                <Text>
                  {post.title}
                </Text>
                <Heading size="md">Body</Heading>
                <Text>
                {post.body}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant="ghost" colorScheme="green">
                  User_Id: {post.userId}
                </Button>             
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <HStack mt={4} justifyContent="center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-lime-200 text-black px-5 py-2.5 rounded hover:bg-lime-500"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className = "bg-lime-200 text-black px-5 py-2.5 rounded hover:bg-lime-500"
        >
          Next
        </button>
      </HStack>
    </Box>
    </div>
  );
}

export default Response;
