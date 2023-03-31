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
import { getSupplements } from "../Redux/AllProductsReducer/action";
import ProductCard from "../Component/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import PageNotfound from "./PageNotfound";
import Pagination from "../Component/Pagination";
const PersonalCare = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const initialCategory = searchParams.getAll("category");
  const initialPrice = searchParams.get('price')
  const dispatch = useDispatch();
  const location = useLocation();
  const [brand, setBrand] = useState(initialBrand || []);
  const [category, setCotegory] = useState(initialCategory || []);
  const [price,setPrice] = useState(initialPrice || "");
  const [page,setPage] = useState(0);
  const { supplements, isLoading, isError } = useSelector((store) => {
    // console.log(store.allProdcutReducer);
    return {
      supplements: store.allProdcutReducer.supplements,
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
    dispatch(getSupplements(paramObj));
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
              <Text marginLeft={"5px"} fontWeight={"bold"}>
                FILTERS
              </Text>
              <Divider orientation="horizontal" width="100%" />
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
                            value={"Tata"}
                            defaultChecked={brand.includes("Tata")}
                          >
                            Tata
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            onChange={handleBrand}
                            value={"Medicure"}
                            defaultChecked={brand.includes("Medicure")}
                          >
                            Medicure
                          </Checkbox>
                        </Flex>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
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
                            CATEGORIES
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
                            defaultChecked={category.includes("Hair care")}
                            value={"Hair care"}
                            onChange={handleCategory}
                          >
                            Hair Care
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            defaultChecked={category.includes("Cardiac care")}
                            value={"Cardiac care"}
                            onChange={handleCategory}
                          >
                            Cardiac Care
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            defaultChecked={category.includes("Bone care")}
                            value={"Bone care"}
                            onChange={handleCategory}
                          >
                            Bone Care
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            defaultChecked={category.includes("Muscle care")}
                            value={"Muscle care"}
                            onChange={handleCategory}
                          >
                            Muscle Care
                          </Checkbox>
                          <Checkbox
                            type={"checkbox"}
                            defaultChecked={category.includes("Diabetes care")}
                            value={"Diabetes care"}
                            onChange={handleCategory}
                          >
                            Diabetes Care
                          </Checkbox>
                        </Flex>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
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
              </Accordion>
            </Box>
            {/* Paroduct Page */}
            <Box width={"75%"} padding={"10px"}>
              <Flex direction={"column"} rowGap={"10px"}>
                <Box>
                  <Image src="https://onemg.gumlet.io/d37c2b9f-5a93-4356-843a-17b5baaf09ad_1678358845.jpg?w=1062&h=124&format=auto" />
                </Box>
                <Box>
                  <Image src="https://onemg.gumlet.io/1d29f4db-0195-426e-8d71-01d949194802_1672658835.png?w=1062&h=124&format=auto" />
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
                    supplements?.map((item, index) => (
                      <ProductCard key={index} {...item} />
                    ))}
                </div>
              )}
              <Pagination currentPage={page} setPage={setPage} />
            </Box>
          </Flex>
        </Container>
        {/* Sidebar Section End */}
      </div>
      <Footer />
    </>
  );
};

export default PersonalCare;
