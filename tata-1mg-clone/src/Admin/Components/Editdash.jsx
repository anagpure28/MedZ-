import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {DeleteIcon, ExternalLinkIcon} from "@chakra-ui/icons"
import { deletedata, postdata } from '../../Redux/AdminCRUD/action';
import { Vitamin } from '../../Redux/AdminAlldataReducer/action';

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
    const dispatch= useDispatch()
    const [productFormData, setProductFormData] = useState(initialProductFormData);
    const {AdminAlldataReducer,AdminUserData}= useSelector((state)=>{return state}) 
    const{vitamin,ayurveda,teststrip,supliment}=AdminAlldataReducer;
    const [flag,setflag]=useState(false)
   
    const handleProductInputChange = (event) => {
        const { name, value } = event.target;
        const data1=''
        let data = name=="images"?[...value] : value
       
        setProductFormData({...productFormData, [name]:data})
     
        //   setProductFormData([name]:data);
      
    };

    // console.log(productFormData)

    const handleAddProduct = (event) => {
        event.preventDefault(); // Perform API call to create a new product
        dispatch(postdata(productFormData))
        .then(()=>dispatch(Vitamin))
        setProductFormData(initialProductFormData)
        // setProducts([...products, productFormData])
    };

    const handleDeleteProduct = (index) => {
        dispatch(deletedata(index))
        .then(()=>dispatch(Vitamin))
    };
    const handlechange =(e)=>{

        console.log(e.target.value)

    }

    const handleEditProduct = (index) => {

        setflag(true)
        const filterdata=vitamin.filter((item,i)=>{
            return item.id==index
        })
        console.log(filterdata)
        setProductFormData({...filterdata[0]})
        // Perform API call to delete the product at index
        // setProducts(products.filter((product, i) => i !== index));
    };

    
    
    return (
        <Stack m={"auto"} mt={"15px"} w={"80%"} >
            <Text style={{ fontWeight: "bolder", fontSize: "35px" }}>Add A Product</Text>
            <FORM onSubmit={handleAddProduct}>
                <DIV>
                    <FormControl id="title">
                        <FormLabel> Name</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="title"
                            value={productFormData.title}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="number"
                            name="price"
                            value={productFormData.price}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="brand">
                        <FormLabel>brand</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="brand"
                            value={productFormData.brand}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="discountprice">
                        <FormLabel>Discount Price</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="discountprice"
                            value={productFormData.discountprice}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="category">
                        <FormLabel>Category</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="category"
                            value={productFormData.category}
                            onChange={handleProductInputChange}

                        />
                    </FormControl>

                    <FormControl id="ratings">
                        <FormLabel>Ratings</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="number"
                            name="ratings"
                            value={productFormData.ratings}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="images">
                        <FormLabel>Image</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="images"
                            value={productFormData.images}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="desc">
                        <FormLabel>Discription</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="desc"
                            value={productFormData.desc}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                </DIV>
                <Button style={{ marginTop: "20px", width: "300px", backgroundColor: "#FF6F61", color: "white" }} type="submit">Add Product</Button>
            </FORM>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Product Image</Th>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>Brand</Th>
                        <Th>Category</Th>
                        <Th>Discount</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {vitamin.length>0&&vitamin.map((product, index) => (
                        
                        <Tr key={index}>                           
                            <Td><img src={product?.images[0]} alt="" /></Td>
                            <Td><input type="text" disabled ={flag==false} onChange={handlechange} value={product.title} /></Td> 
                            <Td><input type="text" disabled ={flag==false} onChange={handlechange} value={`₹ ${product.price}`}/></Td>
                            <Td> <input type="text" disabled ={flag==false} onChange={handlechange} value={product.brand} /></Td>
                            <Td> <input type="text" disabled ={flag==false} onChange={handlechange}  value={product.category} /></Td>                    
                            <Td> <input type="text" disabled ={flag==false} onChange={handlechange} value= {`₹ ${product.discountprice}`}/></Td>
                            <Td>
                                <button  onClick={() => handleEditProduct(index)}>
                                    <ExternalLinkIcon boxSize={6}  />
                                </button>
                            </Td>
                            <Td>
                                <button  onClick={() => handleDeleteProduct(index)}>
                                <DeleteIcon boxSize={6} />
                                </button>
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