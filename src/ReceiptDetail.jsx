import { useParams, useHistory } from 'react-router-dom';
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
  Button,
  CardFooter,
} from '@chakra-ui/react';

import { getStorageValue } from './useLocalStorage';

export const ReceiptDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const receipt = getStorageValue('receipts').find(
    (receipt) => receipt.id === parseInt(id)
  );

  const { name, created_at, items } = receipt;

  const deleteReceipt = (receiptId) => {
    const receipts = JSON.parse(localStorage.getItem('receipts'));
    const newReceipts = receipts.filter((receipt) => receipt.id !== receiptId);
    localStorage.setItem('receipts', JSON.stringify(newReceipts));
    history.push('/receipts');
  };

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
        <CardFooter>
          <Button marginLeft="auto" onClick={() => deleteReceipt(receipt.id)}>
            Delete
          </Button>
        </CardFooter>
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
