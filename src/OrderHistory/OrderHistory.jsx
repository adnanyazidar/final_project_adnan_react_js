// import { useHistory } from "react-router-dom"; // Import useHistory from React Router]
import { Navigate, useNavigate } from "react-router-dom"; // Import useHistory from React Router]
import {  Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";
 
export default function OrderHistory() {
  // const history = useHistory(); // Get the history object
  const history = useNavigate(); // Get the history object
const getOrderData = useSelector((state) => state.pizza.orderPlace);
 
  const handleBackButtonClick = () => {
    // history.push("/main-menu"); // Replace "/main-menu" with the path to your main menu component
    history("/");
  };
 
  return (
    <>
      
      <div>
        {getOrderData.map((data) => (
          <Accordion allowToggle key={data.orderId}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Order Number #ID{data.orderId}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Nama Makanan</Th>
                        <Th>Notes</Th> 
                        <Th>Jumlah Pesanan</Th>
                        <Th isNumeric>Price</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.cartData.map((item) => (
                        <Tr key={item.pizzaName}>
                          <Th>{item.pizzaName}</Th>
                          <Th>{item.notes}</Th>
                          <Th>{item.quantity}</Th>
                          <Th isNumeric>{item.price}</Th>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <Flex justifyContent="center" mb={4} marginTop={10} >
        {/* Centering the button */}
        <Button onClick={handleBackButtonClick} colorScheme="red">Back to Menu</Button>
      </Flex>
    </>
  );
}