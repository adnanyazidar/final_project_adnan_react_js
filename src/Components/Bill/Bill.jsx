import { Center, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rupiah } from "../../utils/currencyConvert";
import { storeOrderPlace } from "../../Redux/ReduxSlices";
import {
  Table,
  Button,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
  VStack
} from "@chakra-ui/react";
 
export default function Bill() {
  const toast = useToast();
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);
  const price = getCartData.reduce((acc, pizza) => {
    const itemTotalPrice = pizza.price * pizza.quantity;
    return acc + itemTotalPrice;
  }, 0);
 
  const ppn = (price * 10) / 100;
  const service = (price * 5) / 100;
  const totalPrice = price + ppn + service;
 
  return getCartData.length !== 0 ? (
    <VStack ml={4}>
      <Table variant={"unstyled"} size={"sm"}>
        <Tr>
          <Td>Price</Td>
          <Td>:</Td>
          <Td>{rupiah(price)}</Td>
        </Tr>
        <Tr>
          <Td>PPN (10%)</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 10) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>Service Charge (5%)</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 5) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>
            <b>Total Price</b>
          </Td>
          <Td>:</Td>
          <Td>
            {" "}
            <b>{rupiah(totalPrice)}</b>
          </Td>
        </Tr>
      </Table>
      <Button colorScheme="green" width="100%" mt={4}
                onClick={() => {
                  // const confirm = confirm("Please confirm your purchase");
                  if (confirm("Please confirm your purchase")) {
                    toast({
                      title: "Order Success",
                      position: "top-right",
                      description: "Pesanan Berhasil!",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                    dispatch(
                      storeOrderPlace({
                        cartData: [...getCartData],
                        ppn: ppn,
                        service: service,
                        totalPrice: totalPrice,
                      })
                    );
                  }
                }}
        >
        Bayar
      </Button>
    </VStack>
  ) : (
    ""
  );
}