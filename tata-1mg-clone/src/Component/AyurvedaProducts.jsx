import React, { useEffect, useState } from 'react'
import axios from "axios";
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const URL = "https://good-pear-cheetah-tutu.cyclic.app/MedZ";

function AyurvedaProducts() {
    
    const [products,setProducts]  = useState([]);

    console.log(products);

    useEffect(()=>{
        axios.get(URL)
            .then(res=>{
                setProducts(res.data[0].ayurveda);
            })
            .catch((error)=>console.log(error));
    },[])

  return (
    <>
    <h1>All Ayurveda Products</h1>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"10px",backgroundColor:"#E0E0E0",padding:"20px"}}>
      {products?.map((el,i)=>{
        return <ProductCard key={i} {...el}/>
      })}
    </div>
    <Pagination currentPage={1} totalPages={5}/>
    </>
  )
}

export default AyurvedaProducts