import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  Heading,
  Text,
  CardHeader,
  CardFooter,
  Button,
  Box,
  Stack,
  StackDivider,
} from '@chakra-ui/react';

const Receipt = ({ receipt }) => {
  const history = useHistory();

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{receipt.name}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />}>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Total
            </Heading>
            <Text pt="2" fontSize="sm">
              $
              {receipt.items.reduce(
                (total, item) => (total += item.price * item.quantity),
                0
              )}
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
};

export default Receipt;
