import { HStack, Image, Input, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchKeyword } from "../Redux/ReduxSlices";

export default function NavBar() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  const dispatch = useDispatch();
  return (
    <>
      <HStack px={25} py={25}>
      <Image src='LogoPizza.png' alt='Dan Abramov' height={'50px'} marginRight={'10px'}/>
        <Input
          placeholder="Search for pizzas!"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        >
          {console.log(getSearchKeyword)}
        </Input>     
          <Button colorScheme=""><Image src='history.png' alt='Dan Abramov' height={'24px'} marginRight={2} /><ReactRouterLink style={{color: "black"}}
            to="/history"
          >
            Order History
          </ReactRouterLink></Button>
      </HStack>
    </>
  );
}