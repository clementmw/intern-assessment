import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Image, Heading, Text, Divider, Stack, Card, CardBody, CardFooter, SimpleGrid, HStack,Spinner } from '@chakra-ui/react';
import Navbar from './Navbar'

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.err || "An error occurred when fetching the post";
        setError(errorMessage);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
  	<div>
  	<Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
    <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Sample image"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{post.title}</Heading>
            <Text>
            </Text>
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
          </div>
    </div>

  );
}

export default PostDetails;
