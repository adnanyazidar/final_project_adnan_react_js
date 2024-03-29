import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
 
export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <CardHeader>
        <Heading size="100%">Keranjang</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {getCartData.map((item, index) => (
            <CartItem
              key={index}
              itemIndex={index}
              item={item}
              // itemName={item.pizzaName}
              // itemQty={item.quantity}
              // itemPrice={item.price}
              // ItemNotes
            ></CartItem>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}