import React from 'react';
import {
  SimpleGrid,
  Flex,
  Card,
  CardBody,
  Badge,
  Text,
  Heading,
} from '@chakra-ui/react';

const Product = ({ product }) => (
  <Card colorScheme="whatsapp">
    <CardBody>
      <Heading>{product.name}</Heading>
      <Text>Price: {product.price}</Text>
      <Text>{product.description}</Text>
    </CardBody>
  </Card>
);

export default Product;
