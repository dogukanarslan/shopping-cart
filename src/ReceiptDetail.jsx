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
} from '@chakra-ui/react';

import { formatDate } from './utils';
import { useContext } from 'react';
import { ReceiptsContext } from './contexts/ReceiptsContext';

export const ReceiptDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const { receipts, setReceipts } = useContext(ReceiptsContext);

  const receipt = receipts?.find((receipt) => receipt.id === parseInt(id));

  const deleteReceipt = (receiptId) => {
    const newReceipts = receipts.filter((receipt) => receipt.id !== receiptId);
    setReceipts(newReceipts);
    history.push('/receipts');
  };

  return (
    <div>
      <Flex mb="2">
        <Button
          colorScheme="red"
          marginLeft="auto"
          onClick={() => deleteReceipt(receipt.id)}
        >
          Delete
        </Button>
      </Flex>

      <Card>
        <CardHeader>
          <Flex>
            <Heading size="md">{receipt.name}</Heading>
            <Spacer />
            <Heading size="md">{formatDate(receipt.created_at)}</Heading>
          </Flex>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {receipt.items?.map((item) => (
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
          {receipt.items?.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </StatNumber>
      </Stat>
    </div>
  );
};
