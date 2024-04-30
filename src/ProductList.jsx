import {
  SimpleGrid,
  Flex,
  Card,
  CardBody,
  Badge,
  Text,
  Heading,
} from '@chakra-ui/react';

const ProductList = ({ products, cartItems }) => {
  return (
    <SimpleGrid columns={4} spacing={5}>
      {products.map((product) => {
        return (
          <Card key={product.id} colorScheme="whatsapp">
            <CardBody>
              <Heading>{product.name}</Heading>
              <Text>Price: {product.price}</Text>
              <Text>{product.description}</Text>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default ProductList;
