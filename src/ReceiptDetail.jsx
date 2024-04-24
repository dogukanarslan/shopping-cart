import {
  Heading,
  Flex,
  Spacer,
  StackDivider,
  Box,
  Card,
  CardBody,
  Stack,
  CardHeader,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Spinner,
} from '@chakra-ui/react';
import useFetch from './useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';

export const ReceiptDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch(`http://localhost:8000/receipts/${id}`);

  if (isLoading) {
    return <Spinner />;
  }

  const { name, created_at, items } = data;

  return (
    <div>
      <Card>
        <CardHeader>
          <Flex>
            <Heading size="md">{name}</Heading>
            <Spacer />
            <Heading size="md">{new Date(created_at).toDateString()}</Heading>
          </Flex>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {items?.map((item) => (
              <Box key={item.id}>
                <Heading size="xs" textTransform="uppercase">
                  {item.name}
                </Heading>

                <Text pt="2" fontSize="sm">
                  Quantity: {item.quantity}
                </Text>
                <Text pt="2" fontSize="sm">
                  Price: ${item.price}
                </Text>
                <Text pt="2" fontSize="sm" fontWeight="bold">
                  Total: ${item.quantity * item.price}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Stat>
        <StatLabel>Total Price</StatLabel>
        <StatNumber>
          $
          {items?.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </StatNumber>
      </Stat>
    </div>
  );
};
