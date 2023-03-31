import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import {ImageCard} from "./ImageCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export function SingleProduct() {
  const {category,id} = useParams();
  const [product,setProduct] = useState(null);
  
  const url = {
    "vitamin-nutritiion" : "https://good-pear-cheetah-tutu.cyclic.app/vitamin",
    "ayurveda-products"  : "https://good-pear-cheetah-tutu.cyclic.app/ayurveda",
    "test-strips"        : "https://good-pear-cheetah-tutu.cyclic.app/teststrip",
    "supplements"        : "https://good-pear-cheetah-tutu.cyclic.app/supplements"
  }

  const addToCart = () => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let DuplicateData = false;
    cartData.forEach((el,ind)=> {
      if(el.id === product.id && el.title == product.title){
        DuplicateData = true;
      }
    })
    if(DuplicateData){
      alert("Product already exist");
      return;
    }
    let newCard = [...cartData, {...product, quantity: 1}];
    localStorage.setItem("cart",JSON.stringify(newCard))
  }


  useEffect(()=>{
    axios.get(`${url[category]}/${id}`)
      .then((res)=>{
        setProduct(res.data);
      })
      .catch(error=>console.log(error));
    },[])
    
    // console.log(product)

  return (
    <div>
      <Navbar />
      <Container maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 20 }}
          py={{ base: 10, md: 14 }}
        >
          <Box>
               {product && <ImageCard key={product?.id} imgs={product?.images}/> }
          </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box as={"header"} align={"left"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "1xl", sm: "2xl" }}
                >
                  {product?.title}
                </Heading>
                <Box
                  color={useColorModeValue("black.900", "black.100")}
                  fontWeight={600}
                  fontSize={"2xl"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  pt={1}
                >
                  <Box>{product?.rating} ★</Box>
                  <Text fontSize={"1rem"}>{`${
                    Math.floor(Math.random() * (500 - 5 + 1)) + 5
                  } ratings`}</Text>
                </Box>

                <List spacing={2} pt={1}>
                  <ListItem>
                    <Text
                      as={"span"}
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "12px", sm: "1rem" }}
                      textDecoration={"line-through"}
                    >
                      ₹{product?.price}
                    </Text>{" "}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Deal of the Day:
                    </Text>{" "}
                    ₹{product?.discountprice}
                  </ListItem>
                </List>
              </Box>

              <Box align={"left"}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Description
                </Text>

                <Text align={"justify"}>
                  {product?.desc}
                </Text>
              </Box>
              <Box align={"left"}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Delivery
                </Text>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    style={{
                      border: "black",
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                      marginBottom: "1rem",
                      gap: "2rem",
                    }}
                  >
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>Free Delivery</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbReplace
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>7 Days Replacement</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(220, 220, 220, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>MedZ+ Delivery</Text>
                    </Box>
                  </Box>
                </Box>

                <Box pt={1}>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                      Available:
                      </Text>{" "}
                      <span style={{ fontWeight: "500" }}>In Stock</span>
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                      Category:
                        </Text>{" "}
                        <span style={{ fontWeight: "500" }}>{product?.category}</span>
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                      Brand:
                        </Text>{" "}
                        <span style={{ fontWeight: "500" }}>{product?.brand}</span>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={addToCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
}
