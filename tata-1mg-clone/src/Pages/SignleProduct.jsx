import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from './Footer'
import { useLocation, useParams } from 'react-router-dom'
import axios from "axios";
function SignleProduct() {
  const {category,id} = useParams();
  
  const url = {
    "vitamin-nutritiion" : "https://good-pear-cheetah-tutu.cyclic.app/vitamin",
    "ayurveda-products"  : "https://good-pear-cheetah-tutu.cyclic.app/ayurveda",
    "test-strips"        : "https://good-pear-cheetah-tutu.cyclic.app/teststrip",
    "supplements"        : "https://good-pear-cheetah-tutu.cyclic.app/supplements"
  }

  const [product,setProduct] = useState(null);

  useEffect(()=>{
    axios.get(`${url[category]}/${id}`)
      .then((res)=>{
        setProduct(res.data);
      })
      .catch(error=>console.log(error));
  },[])

  return (
    <div>
      <Navbar />
      {product && (
        <div style={{border:"1px solid black"}}>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.title} />
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.desc}</p>
        </div>
      )}
      <Footer />
    </div>
  )
}


export default SignleProduct