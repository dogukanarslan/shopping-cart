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
} from '@chakra-ui/react';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Receipts = () => {
  const { data: receipts } = useFetch('http://localhost:8000/receipts');

  const history = useHistory();

  return (
    <SimpleGrid columns={4} spacing={5}>
      {receipts.map((receipt) => {
        return (
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
        );
      })}
    </SimpleGrid>
  );
};
