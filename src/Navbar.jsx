import { Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const Navbar = ({ itemCount }) => {
  return (
    <Flex
      as="nav"
      bgColor="cyan.700"
      textColor="white"
      justifyContent="space-between"
      padding="1rem"
    >
      <Heading fontSize="1rem">The Shopping Cart</Heading>
      <HStack spacing="2rem">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart {itemCount ? `(${itemCount})` : null}</Link>
        <Link to="/products/create">Create Product</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
