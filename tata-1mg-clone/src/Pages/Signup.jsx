import React, { useState } from "react";
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
  Select,
} from "@chakra-ui/react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { CreateUser } from "../Redux/AuthReducer/action";
const initialState = {
  firstname : '',
  lastname : '',
  age : '',
  gender : '',
  maritalstatus : '',
  email : '',
  password : ''
}
export function Signup() {
  const [formState,setFormState] = useState(initialState)
  const dispatch = useDispatch();
  // const auth = useSelector((store)=>console.log(store))
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleChange=(e)=>{
    const { name , value } = e.target;
    setFormState({...formState,[name]:value})
  }
  const handleUser=(e)=>{
    e.preventDefault();
    dispatch(CreateUser(formState))
    setFormState(initialState)
  }
  return (
    <>
      <Text onClick={onOpen}>
        <BsFillPersonPlusFill style={{ fontSize: "20px", cursor: "pointer" }} />
      </Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody  bgColor={"white"}>
            {/* Sign Up Form */}
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>First Name</FormLabel>
              <Input
                ref={initialRef}
                bgColor={"#f1f4f6"}
                color={'gray.800'}
                _placeholder={{
                  color: "gray.800",
                }}
                placeholder="Enter first name"
                type="text"
                name="firstname"
                value={formState.firstname}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>Last Name</FormLabel>
              <Input
                ref={initialRef}
                bgColor={"#f1f4f6"}
                color={'gray.800'}
                _placeholder={{
                  color: "gray.800",
                }}
                placeholder="Enter last name"
                type="text"
                name="lastname"
                value={formState.lastname}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>Age</FormLabel>
              <Input
                ref={initialRef}
                bgColor={"#f1f4f6"}
                _placeholder={{
                  color: "gray.800",
                }}
                placeholder="Enter age"
                color={'gray.800'}
                type="number"
                name="age"
                value={formState.age}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>Gender</FormLabel>
              <Select
                ref={initialRef}
                bgColor={"#f1f4f6"}
                placeholder="Select option"
                color={'gray.800'}
                type="text"
                name="gender"
                value={formState.gender}
                onChange={handleChange}
              >
                <option style={{backgroundColor:'white'}} value="male">Male</option>
                <option style={{backgroundColor:'white'}} value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>Marital Status</FormLabel>
              <Select
                ref={initialRef}
                bgColor={"#f1f4f6"}
                placeholder="Select option"
                color={'gray.800'}
                type="text"
                name="maritalstatus"
                value={formState.maritalstatus}
                onChange={handleChange}
              >
                <option style={{backgroundColor:'white'}} value="single">Single</option>
                <option style={{backgroundColor:'white'}} value="married">Married</option>
              </Select>
            </FormControl>
            <FormControl mt={2}>
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
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color={"gray.900"}>Password</FormLabel>
              <Input
                placeholder="Password"
                ref={initialRef}
                bgColor={"#f1f4f6"}
                color={'gray.800'}
                _placeholder={{
                  color: "gray.800",
                }}
                type={'password'}
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          {/* Sign Up Form */}
          <ModalFooter>
            <Button
              onClick={handleUser}
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
              Sign Up
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