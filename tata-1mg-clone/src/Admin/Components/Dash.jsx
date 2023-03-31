import { Box, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from "../../Redux/AuthReducer/action";

import PieChartComponent from "./Piechart";
import { Adminuserdata } from "../../Redux/AdminUserReducer/action";
import { Ayurveda, Supliment, Teststrip, Vitamin } from "../../Redux/AdminAlldataReducer/action";

const Dash = () => {
   const dispatch = useDispatch()
   const {AdminAlldataReducer,AdminUserData}= useSelector((state)=>{return state})
   

   const {userdata}=AdminUserData 

   useEffect(()=>{
      dispatch(Adminuserdata)
      dispatch(Vitamin)
      dispatch(Ayurveda)
      dispatch(Supliment)
      dispatch(Teststrip)
    },[])


    console.log(AdminAlldataReducer)

    




    
  return (
    <Box p="6">
      <Heading as="h1" mb="6">
        Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
        <Stat>
          <StatLabel>Total Users</StatLabel>
          <StatNumber>{userdata.length}</StatNumber>
          <Text fontSize="sm">+2% from last week</Text>
        </Stat>
        <Stat>
          <StatLabel>Total Products</StatLabel>
          <StatNumber>100,000</StatNumber>
          <Text fontSize="sm">+5% from last week</Text>
        </Stat>
        <Stat>
          <StatLabel>Total Category</StatLabel>
          <StatNumber>4</StatNumber>
          <Text fontSize="sm">+10% from last week</Text>
        </Stat>
      </SimpleGrid>
      <Flex mt="6" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" bg="white" p="6" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb="6">
            Order History
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            <Box bg="#FF6F61" p="4" borderRadius="md">
              <Text  color={"white"} fontWeight="bold">Order #12345</Text>
              <Text  color={"white"} fontSize="sm">Lorem ipsum dolor sit amet</Text>
              <Text  color={"white"} fontSize="sm" fontWeight="bold">
                $1,000
              </Text>
            </Box>
            <Box bg="gray.100" p="4" borderRadius="md">
              <Text fontWeight="bold">Order #23456</Text>
              <Text fontSize="sm">Lorem ipsum dolor sit amet</Text>
              <Text fontSize="sm" fontWeight="bold">
                $2,000
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box m={"auto"} flex="1" bg="white" p="6" borderRadius="md" ml={{ base: 0, md: "6" }} mt={{ base: "6", md: 0 }} boxShadow="md">
          <Heading as="h2" size="md" mb="6">
            Pie Chart
          </Heading>
          <SimpleGrid  columns={1} spacing={4}>
            <PieChartComponent />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dash;
