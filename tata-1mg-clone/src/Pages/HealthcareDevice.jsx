import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import {
  Container,
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Divider,
  Checkbox,
  Image,
  Center,
  Spinner,
  RadioGroup,
} from "@chakra-ui/react";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {  getTestTrip } from "../Redux/AllProductsReducer/action";
import ProductCard from "../Component/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import PageNotfound from "./PageNotfound";
import Pagination from "../Component/Pagination";
const Diabetes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const initialCategory = searchParams.getAll("category");
  const initialPrice = searchParams.get('price')
  const dispatch = useDispatch();
  const location = useLocation();
  const [brand, setBrand] = useState(initialBrand || []);
  const [category, setCotegory] = useState(initialCategory || []);
  const [price,setPrice] = useState(initialPrice || "");
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(+initialPage || 1);
  const { teststrip, isLoading, isError } = useSelector((store) => {
    // console.log(store.allProdcutReducer);
    return {
      teststrip: store.allProdcutReducer.teststrip,
      isLoading: store.allProdcutReducer.isLoading,
      isError: store.allProdcutReducer.isError,
    };
  });
  // console.log(vitamins);
  const handleBrand = (e) => {
    let newBrand = [...brand];
    const value = e.target.value;
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleCategory = (e) => {
    let newCategory = [...category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCotegory(newCategory);
  };

  const handleSortByPrice=(e)=>{
    setPrice(e.target.value)
  }
  // console.log(category);
  // search Param object
  const paramObj = {
    params: {
      _limit : 6,
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
      _sort : searchParams.get('price') && 'price',
      _order : searchParams.get('price'),
      _page : searchParams.get('page')
    },
  };

  useEffect(() => {
    dispatch(getTestTrip(paramObj));
  }, [location.search]);

  useEffect(() => {
    let params = {
      brand,
      category,
      page,
    };
    price && (params.price = price);
    setSearchParams(params);
  }, [brand, category,price,page]);
  // console.log(vitamins);
  return (
    <>
      <div style={{ backgroundColor: "#edeeee" }}>
        <Navbar />
        <Divider orientation="horizontal" width="100%" />
        {/* Sidebar Section Start */}
        <Container
          maxW="7xl"
          bg="green.400"
          color="#262626"
          bgColor={"#edeeee"}
          marginTop={"5px"}
        >
          <Flex>
            <Box
              width={"25%"}
              // border={"1px solid gray"}
              bgColor={"white"}
              textAlign={"left"}
              padding={"15px"}
              height={'50%'}
              marginTop={'10px'}
            >
              <Text marginLeft={"15px"} fontWeight={"bold"} fontSize={'14px'}>
                FILTERS
              </Text>
              <Divider orientation="horizontal" width="100%" backgroundColor={'blackAlpha.900'} />
              <Accordion allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight={"bold"}
                            fontSize={"14px"}
                          >
                            BRANDS
                          </Box>
                          {isExpanded ? (
                            <HiOutlineMinusCircle fontSize="12px" />
                          ) : (
                            <IoIosAddCircleOutline fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Flex direction={"column"}>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Contour"}
                            defaultChecked={brand.includes("Contour")}
                          >
                            Contour
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Accu-Chek"}
                            defaultChecked={brand.includes("Accu-Chek")}
                          >
                            Accu-Chek
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Accu-Chek"}
                            defaultChecked={brand.includes("Accu-Chek")}
                          >
                            Accu-Chek
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"OneTouch"}
                            defaultChecked={brand.includes("OneTouch")}
                          >
                            OneTouch
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"SD Biosensor"}
                            defaultChecked={brand.includes("SD Biosensor")}
                          >
                            SD Biosensor
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Microlet"}
                            defaultChecked={brand.includes("Microlet")}
                          >
                            Microlet
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"BeatO Curv"}
                            defaultChecked={brand.includes("BeatO Curv")}
                          >
                            BeatO Curv
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Dr Morepen"}
                            defaultChecked={brand.includes("Dr Morepen")}
                          >
                            Dr Morepen
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Dr Morepen"}
                            defaultChecked={brand.includes("Dr Morepen")}
                          >
                            Dr Morepen
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Control"}
                            defaultChecked={brand.includes("Control")}
                          >
                            Control
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Recombigen"}
                            defaultChecked={brand.includes("Recombigen")}
                          >
                            Recombigen
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"FreeStyle"}
                            defaultChecked={brand.includes("FreeStyle")}
                          >
                            FreeStyle
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"TrueHb"}
                            defaultChecked={brand.includes("TrueHb")}
                          >
                            TrueHb
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Arkray"}
                            defaultChecked={brand.includes("Arkray")}
                          >
                            Arkray
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Recombigen"}
                            defaultChecked={brand.includes("Recombigen")}
                          >
                            Recombigen
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Dr Trust"}
                            defaultChecked={brand.includes("Dr Trust")}
                          >
                            Dr Trust
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"K-Life"}
                            defaultChecked={brand.includes("K-Life")}
                          >
                            K-Life
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Accu-Chek"}
                            defaultChecked={brand.includes("Accu-Chek")}
                          >
                            Accu-Chek
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Naulakha"}
                            defaultChecked={brand.includes("Naulakha")}
                          >
                            Naulakha
                          </Checkbox>
                        </Flex>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <Divider orientation="horizontal" width="100%" backgroundColor={'blackAlpha.900'} />
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight={"bold"}
                            fontSize={"14px"}
                          >
                            SORTING
                          </Box>
                          {isExpanded ? (
                            <HiOutlineMinusCircle fontSize="12px" />
                          ) : (
                            <IoIosAddCircleOutline fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Flex direction={"column"}>
                        <RadioGroup>
                         <div onChange={handleSortByPrice}>
                            <input type="radio" name='order' value={'asc'} defaultChecked={price==='asc'} />
                            <label>Ascending </label>
                            <br/>
                            <input type="radio" name='order' value={'desc'} defaultChecked={price==='desc'}/>
                            <label>Descending</label>
                         </div>
                        </RadioGroup>
                        </Flex>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <Divider orientation="horizontal" width="100%" backgroundColor={'blackAlpha.900'} />
              </Accordion>
            </Box>
            {/* Paroduct Page */}
            <Box width={"75%"} padding={"10px"}>
              <Flex direction={"column"} rowGap={"10px"}>
                <Box>
                  <Image src="https://onemg.gumlet.io/81ac0f01-674e-4569-b47f-326d0103bfc6_1669038800.jpg?w=1062&h=124&format=auto" />
                </Box>
                <Box>
                  <Image src="https://onemg.gumlet.io/28341ae2-d4cf-4265-8fc3-8150680e5b5e_1667890380.jpg?w=1062&h=124&format=auto" />
                </Box>
              </Flex>
              <Flex
                direction={"row"}
                justifyContent={"space-between"}
                marginTop={"10px"}
              >
                <Box>
                  <Text fontWeight={"bold"}>All Products</Text>
                </Box>
              </Flex>
              {isLoading ? (
                <Center>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Center>
              ) : isError ? (
                <PageNotfound />
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "15px",
                    padding: "20px",
                    marginLeft: "25px",
                  }}
                >
                  {
                    teststrip?.map((item, index) => (
                      <ProductCard key={index} {...item} />
                    ))}
                </div>
              )}
              <Pagination page={page} setPage={setPage} />
            </Box>
          </Flex>
        </Container>
        {/* Sidebar Section End */}
      </div>
      <Footer />
    </>
  );
};

export default Diabetes;
