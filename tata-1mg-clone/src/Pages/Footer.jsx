import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaLocation
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Text fontSize={"30px"} fontWeight={'bold'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <div>
      <Box p={4} border={"1px solid gray"}>
        <Text
          style={{ marginTop: "4px", fontSize: "25px", marginBottom: "10px" }}
        >
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} marginBottom={"25px"}>
          <Feature title={"260m+"} text={"Visitors"} />
          <Feature title={"31m+"} text={"Orders Delivered"} />
          <Feature title={"180m+"} text={"Cities"} />
        </SimpleGrid>
        <hr
          style={{
            width: "80%",
            margin: "auto",
            color: "black",
            border: "1px solid gray",
          }}
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} margin={"1.5% 20%"}>
          <Text style={{ marginTop: "4px", fontSize: "20px" }}>
            Get the link to download App
          </Text>
          <input
            type="text"
            placeholder="Enter your number"
            style={{
              backgroundColor: "#f1f4f6",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          />
          <Button
            style={{
              backgroundColor: "#ff6f61",
              color: "white",
              width: "120px",
              margin: "0 10px",
            }}
          >
            SEND LINK
          </Button>
        </SimpleGrid>
      </Box>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"8xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Know Us</ListHeader>
              <Link to={'/about'}>About Us</Link>
              <Link to={'#'}>Contact us</Link>
              <Link to={'#'}>Press Coverage</Link>
              <Link to={'#'}>Careers</Link>
              <Link to={'#'}>Business Partnership</Link>
              <Link to={'#'}>Become a Health Partner</Link>
              <Link to={'#'}>Corporate Goverance</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Our Policies</ListHeader>
              <Link to={'#'}>Privacy Policy</Link>
              <Link to={'#'}>Terms & Conditions</Link>
              <Link to={'#'}>Editorial Policy</Link>
              <Link to={'#'}>Return Policy</Link>
              <Link to={'#'}>IP Policy</Link>
              <Link to={'#'}>Grivence Redressal Policy</Link>
              <Link to={'#'}>Fake Jobs and Fraud Disclaimer</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Out Services</ListHeader>
              <Link to={'#'}>Order Medicines</Link>
              <Link to={'#'}>Book Lab Tests</Link>
              <Link to={'#'}>Ayurveda Articles</Link>
              <Link to={'#'}>Hindi Articles</Link>
              <Link to={'#'}>Care Plan</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Connect</ListHeader>
              <Link to={'#'}>Social Links</Link>
              <div>
                <Stack direction={"row"} spacing={2}>
                  <SocialButton
                    label={"Twitter"}
                    href={
                      "https://twitter.com/1mgOfficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    }
                  >
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton
                    label={"YouTube"}
                    href={
                      "https://www.youtube.com/channel/UCNUvsEya-Jq_Pw1t6R47hew"
                    }
                  >
                    <FaYoutube />
                  </SocialButton>
                  <SocialButton
                    label={"Instagram"}
                    href={"https://www.instagram.com/1mgofficialpage/?hl=en"}
                  >
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton
                    label={"Facebook"}
                    href={"https://www.facebook.com/1mgOfficial/"}
                  >
                    <FaFacebook />
                  </SocialButton>
                  <SocialButton
                    label={"Linkedin"}
                    href={
                      "https://www.linkedin.com/company/1mg/?originalSubdomain=in"
                    }
                  >
                    <FaLinkedin />
                  </SocialButton>
                </Stack>
              </div>
              <Link href={"#"}>What daily dose of health?</Link>
              <Button style={{ backgroundColor: "#ff6f61", color: "white" }}>
                SIGN UP
              </Button>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <img
                src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto"
                alt=""
                width={"120px"}
              />
              <img
                src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto"
                alt=""
                width={"120px"}
              />
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          fontWeight={"bold"}
        >
          <Container
            as={Stack}
            maxW={"8xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Stack direction={"row"} spacing={6}>
              <Box>
                <Image
                  src="https://static.legitscript.com/seals/729605.png"
                  width="100px"
                />
              </Box>
              <Box>
                <Image
                  src="https://onemg.gumlet.io/URS_ebgmxc.png"
                  width="100px"
                />
              </Box>
            </Stack>
          </Container>
          <Text>
            India's only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </Text>
        </Box>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"8xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={2}
            justify={{ md: "initial" }}
            align={{ md: "center" }}
          >
            <Text>
              © 2023 Tata 1mg. All rights reserved. In compliance with Drugs and
              Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
              process requests for Schedule X and other habit forming drug.
            </Text>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
