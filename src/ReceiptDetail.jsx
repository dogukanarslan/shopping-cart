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
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { getStorageValue } from './useLocalStorage';

export const ReceiptDetail = () => {
  const { id } = useParams();

  const receipt = getStorageValue('receipts').find(
    (receipt) => receipt.id === parseInt(id)
  );

  const { name, created_at, items } = receipt;

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
