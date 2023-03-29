import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from "../Redux/AuthReducer/action";
import { useToast } from '@chakra-ui/react'
export function Login() {
  const toast = useToast()
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {user} = useSelector((store)=>{
    return {
      user : store.authReducer.users,
    }
  })
  // console.log(email,password);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleLogin=(e)=>{
    e.preventDefault();
    let flag = false;
    for(let i=0; i<user.length; i++){
      if(user[i].email===email && user[i].password===password){
        flag = true;
        break;
      }
    }
    if(flag){
      toast({
        title: 'Account created.',
        description: "Login Successfully!",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'Account created.',
        description: "Invalid email and password!",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
    setEmail("");
    setPassword("")
  }
  useEffect(()=>{
    dispatch(userLogin)
  },[])
  // console.log(user);
  return (
    <>
      <Text onClick={onOpen}>
        <BsPersonCircle style={{ fontSize: "20px", cursor: "pointer" }} />
      </Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} style={{ cursor: "pointer" }}>
            Login
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} bgColor={"white"}>
            <FormControl>
              <FormLabel color={"gray.900"}>Email Address</FormLabel>
              <Input
                ref={initialRef}
                bgColor={"#f1f4f6"}
                color={'gray.800'}
                _placeholder={{
                  color: "gray.800",
                }}
                placeholder="Email address"
                type={'email'}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={"gray.900"}>Password</FormLabel>
              <Input
                placeholder="Password"
                ref={initialRef}
                bgColor={"#f1f4f6"}
                color={'gray.800'}
                type={'password'}
                _placeholder={{
                  color: "gray.800",
                }}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleLogin}
              px={4}
              fontSize={"sm"}
              marginRight={4}
              rounded={"full"}
              bg={"blue.400"}
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
              Login
            </Button>
            <Button
              onClick={onClose}
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
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
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}