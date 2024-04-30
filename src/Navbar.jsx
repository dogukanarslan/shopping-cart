import { Container, Flex, HStack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bgColor="blackAlpha.800" textColor="white">
      <Container maxW="container.xl">
        <Flex as="nav" justifyContent="space-between" paddingY="1rem">
          <Heading fontSize="1rem">
            <Link to="/">The Shopping Cart</Link>
          </Heading>
          <HStack spacing="2rem" fontSize="sm">
            <Link to="/receipts">Receipts</Link>
            <Link to="/products">Products</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
