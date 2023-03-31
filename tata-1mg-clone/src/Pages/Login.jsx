import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import Logo from "../Component/Logo/New_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogin } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
export function Login() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { user,isAuth } = useSelector((store) => {
    return {
      user: store.authReducer.users,
      isAuth : store.authReducer.isAuth
    };
  });
  console.log(isAuth);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin).then(()=>{
    let flag = false;
    for (let i = 0; i < user.length; i++) {
      if (user[i].email === email && user[i].password === password) {
        flag = true;
        break;
      }
    }
    if (flag) {
      toast({
        title: "Logged In 👍.",
        description: "Login Successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate(location.state,{replace : true})
    } else {
      toast({
        title: "Login Failed 🙏.",
        description: "Invalid email and password!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setEmail("");
    setPassword("");
    })
  };
  // useEffect(() => {
  //   dispatch(userLogin);
  // }, []);
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bgColor={"#edeeee"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image src={Logo} alt="Logo" />
          </Stack>
          <Box rounded={"lg"} bgColor={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color={"gray.800"}>Email address</FormLabel>
                <Input
                  bgColor={"white"}
                  color={"gray.800"}
                  border={"1px solid gray"}
                  _placeholder={{
                    color: "gray.800",
                  }}
                  placeholder="Email address"
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={"gray.800"}>Password</FormLabel>
                <Input
                  bgColor={"white"}
                  color={"gray.800"}
                  border={"1px solid gray"}
                  _placeholder={{
                    color: "gray.800",
                  }}
                  placeholder="Password"
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox color={"black"}>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleLogin}
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
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
