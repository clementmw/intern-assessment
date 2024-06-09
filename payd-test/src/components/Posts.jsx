import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, VStack, Heading, Container } from '@chakra-ui/react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar'


function Posts() {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  // Function to post to the API
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("https://jsonplaceholder.typicode.com/posts", { userId, title, body })
        .then((res) => {
          console.log(res);
          toast.success('Data submitted successfully!');
          // Clear fields after success
          setBody("");
          setTitle("");
          setUserId("");
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.err || "An error occurred when uploading data";
          setError(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
  	<div >
  	<Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {error && <p className="text-red-500">{error}</p>}
      <Container maxW="lg" centerContent>
        <Box p={6} borderRadius="lg" className="bg-white shadow-md" width="full">
          <Heading as="h1" size="lg" mb={6} textAlign="center" className="text-black">
            Submit a Post
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="title" isRequired>
                <FormLabel className="text-dark">Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-light-green focus:ring-light-green focus:border-light-green"
                />
              </FormControl>

              <FormControl id="body" isRequired>
                <FormLabel className="text-dark">Body</FormLabel>
                <Textarea
                  type="text"
                  value={body}
                  placeholder="Enter body"
                  onChange={(e) => setBody(e.target.value)}
                  className="border-light-green focus:ring-light-green focus:border-light-green"
                />
              </FormControl>

              <FormControl id="userId">
                <FormLabel className="text-dark">User ID</FormLabel>
                <Input
                  size="md"
                  type="number"
                  pattern="\d*"
                  inputMode="numeric"
                  placeholder="Enter User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="border-light-green focus:ring-light-green focus:border-light-green"
                />
              </FormControl>
              <div className="bg-lime-600 text-white font-medium rounded-lg py-2.5 px-10" >
              <button
                type="submit"
                width="full"
              >
                Submit
              </button>
              </div>
            </VStack>
          </form>
          <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </Box>
      </Container>
    </div>
    </div>

  );
}

export default Posts;
