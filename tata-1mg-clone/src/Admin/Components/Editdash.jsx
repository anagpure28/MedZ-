import { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text
} from '@chakra-ui/react';
import styled from '@emotion/styled';


const initialProductFormData = {
    title: '',
    price: 0,
    brand: '',
    discountprice: '',
    category: '',
    images: [],
    ratings: 0
};

const AdminPanel = () => {
    const [productFormData, setProductFormData] = useState(initialProductFormData);
    const [products, setProducts] = useState([]);
    const handleProductInputChange = (event) => {
        const { name, value } = event.target;
        console.log(productFormData)
        setProductFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleAddProduct = (event) => {
        event.preventDefault();
        // Perform API call to create a new product
        setProducts([...products, productFormData]);

    };

    const handleDeleteProduct = (index) => {
        // Perform API call to delete the product at index
        setProducts(products.filter((product, i) => i !== index));
    };

    const handleEditProduct = (index) => {
        // Perform API call to delete the product at index
        setProducts(products.filter((product, i) => i !== index));
    };

    return (
        <Stack m={"auto"} mt={"15px"} w={"80%"} spacing={8}>
            <Text style={{ fontWeight: "bolder", fontSize: "35px" }}>Add A Product</Text>
            <FORM onSubmit={handleAddProduct}>
                <DIV>
                    <FormControl id="title">
                        <FormLabel> Name</FormLabel>
                        <Input
                            type="text"
                            name="title"
                            value={productFormData.title}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <Input
                            type="number"
                            name="price"
                            value={productFormData.price}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="brand">
                        <FormLabel>brand</FormLabel>
                        <Input
                            type="text"
                            name="brand"
                            value={productFormData.brand}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="discountprice">
                        <FormLabel>Discount Price</FormLabel>
                        <Input
                            type="text"
                            name="discountprice"
                            value={productFormData.discountprice}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="category">
                        <FormLabel>Category</FormLabel>
                        <Input
                            type="text"
                            name="category"
                            value={productFormData.category}
                            onChange={handleProductInputChange}

                        />
                    </FormControl>

                    <FormControl id="ratings">
                        <FormLabel>Ratings</FormLabel>
                        <Input
                            type="number"
                            name="ratings"
                            value={productFormData.ratings}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="images">
                        <FormLabel>Image</FormLabel>
                        <Input
                            type="text"
                            name="images"
                            value={productFormData.images}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="desc">
                        <FormLabel>Discription</FormLabel>
                        <Input
                            type="text"
                            name="desc"
                            value={productFormData.desc}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                </DIV>
                <Button style={{marginTop:"20px", width:"300px" , backgroundColor:"#FF6F61",color:"white"}} type="submit">Add Product</Button>
            </FORM>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map((product, index) => (
                        <Tr key={index}>
                            <Td>{product.name}</Td>
                            <Td>${product.price}</Td>
                            <Td>
                                <Button bg={'#FF6F61'} color={"white"} onClick={() => handleDeleteProduct(index)}>
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Stack>
    );
};


const DIV = styled.div`

   display: grid;
   grid-template-columns:repeat(2,1fr);
   gap: 20px;
   
`

const FORM = styled.form`

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:25px
    
`

export default AdminPanel