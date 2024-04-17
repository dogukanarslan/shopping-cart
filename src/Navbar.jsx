import { Container, Flex, HStack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

const Navbar = ({ itemCount }) => {
  return (
    <Box bgColor="blackAlpha.800" textColor="white">
      <Container maxW="container.xl">
        <Flex as="nav" justifyContent="space-between" padding="1rem">
          <Heading fontSize="1rem">The Shopping Cart</Heading>
          <HStack spacing="2rem" fontSize="sm">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart {itemCount ? `(${itemCount})` : null}</Link>
            <Link to="/products/create">Create Product</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
