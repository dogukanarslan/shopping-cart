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
              <Flex alignItems="center" justifyContent="space-between">
                <Heading>{product.name}</Heading>
                <Badge
                  colorScheme={
                    product.quantity <= 5
                      ? 'red'
                      : product.quantity <= 10
                        ? 'yellow'
                        : 'green'
                  }
                >
                  {product.quantity}
                </Badge>
              </Flex>
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
