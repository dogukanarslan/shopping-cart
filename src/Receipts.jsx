import {
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Text,
  CardHeader,
  CardFooter,
  Button,
  Flex,
  Box,
  Stack,
  StackDivider,
  Spinner,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Receipts = () => {
  const { data: receipts, isLoading } = useFetch(
    'http://localhost:8000/receipts'
  );

  const history = useHistory();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SimpleGrid columns={4} spacing={5}>
      {receipts.map((receipt) => (
        <Card key={receipt.id}>
          <CardHeader>
            <Heading size="md">{receipt.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />}>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Price
                </Heading>
                <Text pt="2" fontSize="sm">
                  {receipt.price}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Created At
                </Heading>
                <Text pt="2" fontSize="sm">
                  {new Date(receipt.created_at).toUTCString()}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button onClick={() => history.push(`/receipts/${receipt.id}`)}>
              View
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Box
        border="1px"
        borderColor="gray.100"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/receipts/create">New Receipt</Link>
      </Box>
    </SimpleGrid>
  );
};
