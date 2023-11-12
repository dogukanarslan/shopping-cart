import { Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bgColor="cyan.700"
      textColor="white"
      justifyContent="space-between"
      padding="1rem"
      marginBottom="1rem"
    >
      <Heading fontSize="1rem">The Shopping Cart</Heading>
      <HStack spacing="2rem">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products/create">Create Product</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;