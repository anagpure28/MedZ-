import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Center,
  Divider,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import Logo from "../Component/Logo/New_Logo.png";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [auth,setAuth] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [show, setShow] = useState(false);
  let{isAuth}=useSelector((state)=>{return state.authReducer})
  // const [auth,setauth]=useState(isAuth)

  const [user,setUser] = useState("")
  const Links = [
    { path: "/health-resource", title: "Health Resource Center" },
    { path: "/vitamin-nutritiion", title: "Vitamins & Nutrition" },
    { path: "/diabetes", title: "Diabetes" },
    { path: "/health-device", title: "Healthcare Devices" },
    { path: "/personal-care", title: "Personal Care" },
    { path: "/health-condition", title: "Health Conditions" },
    { path: "/ayurveda-products", title: "Ayurveda Products" },
    { path: "/homeopathy", title: "Homeopathy" },
    { path: "/featured", title: "Featured" },
  ];
  useEffect(()=>{
    let user = localStorage.getItem('user')
    setUser(user)
  },[])
  // if(show){
  //   localStorage.removeItem('user')
  // }
  return (
    <>
      <Box px={4} bgColor={"whiteAlpha.900"}>
        <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            color={"black"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            color={"black"}
            fontWeight={"bold"}
          >
            <Box>
              <Link to={"/"}>
                <Image src={Logo} alt="Logo" width={"80px"} />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                MEDICINES
              </Text>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                LAB TESTS
              </Text>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                CUNSULT DOCTORS
              </Text>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                COVID-19
              </Text>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                AYURVEDA
              </Text>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                CARE PLANE
              </Text>

{/* Show */ }


              <div style={{ marginLeft: "100px" }}>
                 
               {!isAuth?
               <Center height="50px">
               <Link to={"/login"}>Login</Link>
               <Divider
                 orientation="vertical"
                 height={"20px"}
                 margin={"10px"}
                 bgColor={"blackAlpha.900"}
               />
               <Link to={"/signup"}>Sign Up</Link>
             </Center>:
              <Text>
              {user} 
              <Button
                onClick={() => setAuth(!isAuth)}
                marginLeft={5}
                width={"100px"}
                h={"35px"}
                px={4}
                fontSize={"sm"}
                rounded={"full"}
                bg={"#ff6f61"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >

                Logout
              </Button>
            </Text>
               
              }   
  {/* Show */ }            
                 
              
              </div>
              <Text
                transform="scale(1.0)"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  color: "#ff6f61",
                  cursor: "pointer",
                }}
              >
                Offers
              </Text>
            </HStack>
          </HStack>
          <div
            style={{
              display: "flex",
              columnGap: "35px",
              alignItems: "center",
              color: "black",
            }}
          >
            <Link to="/cart">
              {" "}
              <BsCart3 style={{ fontSize: "25px" }} />
            </Link>
            <Text
              fontWeight={"bold"}
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                color: "#ff6f61",
                cursor: "pointer",
              }}
            >
              Need Help?
            </Text>
          </div>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color={"black"}>
              {Links.map((link) => (
                <NavLink
                  style={{ display: "flex", alignItems: "center" }}
                  to={link.path}
                  key={link.path}
                >
                  {link.title}
                  <RiArrowDropDownLine />
                </NavLink>
              ))}

              <div style={{ marginLeft: "150px" }}>
                <Center height="50px">
                  <Link to={"/login"}>Login</Link>
                  <Divider
                    orientation="vertical"
                    height={"20px"}
                    margin={"10px"}
                    bgColor={"blackAlpha.900"}
                  />
                  <Link to={"/signup"}>Sign Up</Link>
                </Center>
              </div>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <div>
        <hr />
      </div>
      <Flex
        align={"center"}
        justify={"center"}
        width={"100%"}
        bgColor={"whiteAlpha.900"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          marginTop={"8px"}
          marginBottom={"5px"}
          spacing={"20px"}
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdLocationPin color="black" />}
              />
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.900"}
                bgColor={"#f1f4f6"}
                border={"1px solid gray"}
                _placeholder={{
                  color: "gray.600",
                }}
                type={"email"}
                required
                placeholder={"Location"}
                height={"35px"}
                width={{ sm: "300px", lg: "300px" }}
                borderRadius={"none"}
              />
              <InputRightElement
                children={<MdOutlineMyLocation color="black" />}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                height={"35px"}
                bgColor={"#f1f4f6"}
                border={"1px solid gray"}
                _placeholder={{
                  color: "gray.800",
                }}
                type={"email"}
                required
                placeholder={"Search for Medicines and Health Products"}
                width={{ sm: "300px", lg: "550px" }}
                borderRadius={"none"}
              />
              <InputRightElement children={<BiSearchAlt2 color="black" />} />
            </InputGroup>
          </FormControl>
          <Text w={"120%"} style={{ marginTop: "5px", color: "black" }}>
            QUICK BUY! Get 15% off on medicines*
          </Text>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              width={"150px"}
              h={"35px"}
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#ff6f61"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Quick Order
            </Button>
          </FormControl>
        </Stack>
      </Flex>
      {/* Prodcut Section */}
      <div>
        <hr />
      </div>
      <HStack
        as={"nav"}
        spacing={2}
        display={{ base: "none", md: "flex" }}
        justifyContent={"center"}
        maxW={"100%"}
        height={"60px"}
        bgColor={"white"}
        color={"black"}
      >
        {Links.map((link) => (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    display: "flex",
                    alignItems: "center",
                    color: "#ff6f61",
                    fontSize: "16px",
                  }
                : {
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize: "16px",
                  };
            }}
            to={link.path}
            key={link.path}
          >
            {link.title}
            <RiArrowDropDownLine />
          </NavLink>
        ))}
      </HStack>
      {/* Product End Section */}
    </>
  );
}