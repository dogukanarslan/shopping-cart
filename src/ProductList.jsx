import {
  SimpleGrid,
  Flex,
  Card,
  CardBody,
  CardFooter,
  Button,
  Badge,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container">
      <SimpleGrid columns={4} spacing={5}>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <CardBody>
                <Flex alignItems="center" justifyContent="space-between">
                  <Heading>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </Heading>
                  <Badge
                    colorScheme={
                      product.quantity <= 5
                        ? "red"
                        : product.quantity <= 10
                        ? "yellow"
                        : "green"
                    }
                  >
                    {product.quantity}
                  </Badge>
                </Flex>
                <Text>{product.description}</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={() => addToCart(product.id)}>Add</Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default ProductList;
