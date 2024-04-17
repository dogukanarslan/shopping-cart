import {
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

const Cart = ({ cartItems }) => {
  console.log(cartItems);

  if (cartItems.length === 0) {
    return <Heading size="md">Cart is empty</Heading>;
  }

  return (
    <>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.price}</Td>
                <Td>{item.quantity * item.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Stat>
        <StatLabel>Total Price</StatLabel>
        <StatNumber>
          {cartItems.reduce(
            (total, currentValue) =>
              total + currentValue.quantity * currentValue.price,
            0
          )}
        </StatNumber>
      </Stat>
    </>
  );
};

export default Cart;
