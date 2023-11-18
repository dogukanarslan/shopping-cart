import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <>
      <UnorderedList>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            {item.name} - {item.quantity}
          </ListItem>
        ))}
      </UnorderedList>
      <Text>
        Total: {" "}
        {cartItems.reduce(
          (total, currentValue) =>{
            console.log(currentValue)
            return total + currentValue.quantity * currentValue.price},
          0
        )}
      </Text>
    </>
  );
};

export default Cart;
