import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProduct } from '../redux/productReducer/action';

import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MineralSupplementProductCart } from './MineralSupplementProductCart';

export const MineralSupplementProductList = () => {

    const[searchParams] = useSearchParams();

    // console.log(searchParams.getAll("category"));

const dispatch = useDispatch();
const {products} = useSelector((store)=>store.productReducer);
console.log("products",products)
const location = useLocation();
// console.log(location);
let obj={
    params:{
        category: searchParams.getAll("category"),
        // brand: searchParams.getAll("brand"),
    }
}

let obj1={
  params:{
      brand: searchParams.getAll("brand"),
  }
}



useEffect(()=>{
    dispatch(getProduct(obj))
},[location.search]);


useEffect(()=>{
  dispatch(getProduct(obj1))
},[location.search]);

  return (
    <DIV>{products.length>0 && products.map((el)=>{
        return (<MineralSupplementProductCart key={el.key} {...el}></MineralSupplementProductCart>)
    }) }</DIV>
  )
}

const DIV = styled.div`
  margin: 40px auto;
  margin-left: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border: 1px solid red;
`;


