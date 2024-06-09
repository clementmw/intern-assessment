import React from 'react';
import { Box, Flex, Link, Spacer, Heading,Image} from '@chakra-ui/react';
import logo from '../assests/payd.png'

const Navbar = () => {
  return (
    <div className = "bg-cyan-950 text-white">
    <Box   p={4} >
      <Flex alignItems="center">
        <Heading as="h1" size="lg">
        <Link href = "/">
         <Image
         src={logo}
         alt="Sample image"
         />
         </Link>
        </Heading>
        <Spacer />
        <Flex>
          <Link href="/create_user" mx={2} _hover={{ textDecoration: 'none', color: 'gray.300' }}>
            Create Posts
          </Link>
          <Link href="/" mx={2} _hover={{ textDecoration: 'none', color: 'gray.300' }}>
            Posts
          </Link>

        </Flex>
      </Flex>
    </Box>
    </div>
  );
};

export default Navbar;
