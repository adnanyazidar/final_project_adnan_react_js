import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  Center,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { storeCartData } from "../../Redux/ReduxSlices";

export default function ProductCard({ cardContent }) {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addToCart = (pizzaName, quantity, price) => {
    const existingItem = getCartData.find(
      (item) => item.pizzaName === pizzaName
    );

    if (existingItem) {
      // If item already exists, increment its quantity:

      return;
    } else {
      // If item doesn't exist, add it to the cart:
      const newItem = {
        pizzaName,
        quantity,
        price,
        notes: ''
      };

      dispatch(storeCartData([...getCartData, newItem]));
    }
  };

  return (
    <Card maxW="auto" maxH="auto" minH={560}>
      <CardBody>
        <Image
          src={cardContent.img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{cardContent.pizzaName}</Heading>
          <Text>{cardContent.pizzaDescription}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <VStack>
          <Text color="blue.600" fontSize="16">
           Rp {cardContent.pizzaPrice}
          </Text>
          <ButtonGroup spacing="2">
            <Button
              colorScheme='pink' 
              variant='solid'
              onClick={() =>
                addToCart(cardContent.pizzaName, 1, cardContent.pizzaPrice)
              }
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </VStack>
      </CardFooter>
    </Card>
  );
}
