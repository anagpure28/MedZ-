import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
// import useSearchParams from "react-router-dom"
export const MineralSupplementSidebar = () => {
    // const [searchParams,setsearchParams]=useSearchParams();

    const [searchParams,setsearchParams] = useSearchParams();
const [category,setCategory] = useState([]);
const [brand,setBrand] = useState([]);



const handleChangeBrand = (e) => {
  let newBrand=[...brand];
  const value = e.target.value;
    if(newBrand.includes(value)){
         newBrand=newBrand.filter((el)=>el!==value)
        }else{
         newBrand.push(value);
        }
 setBrand(newBrand);
}

    const handleChange = (e) => {
        // console.log(e.target.value);
       let newCategory=[...category];
      //  let newBrand=[...brand];
       const value = e.target.value;

       if(newCategory.includes(value)){
        newCategory=newCategory.filter((el)=>el!==value)
       }else{
        newCategory.push(value);
       }

    //  console.log(category)
       setCategory(newCategory);
      //  setBrand(newBrand);
    };

    useEffect(()=>{
        let params={
            category: category.join(','),
           
        }
        setsearchParams(params);
        // console.log(searchParams.getAll("category"));
    },[category]);

    useEffect(()=>{
      let params={
          brand: brand.join(','),
         
      }
      setsearchParams(params);
      // console.log(searchParams.getAll("category"));
  },[brand]);


  return (
    <div>
         <div id="category">category
         <div>
            <input type="checkbox" value={"Hair care"} onChange={handleChange}></input>
            <label>Hair care</label>
         </div>
         <div>
            <input type="checkbox" value={"Cardiac care"} onChange={handleChange}></input>
            <label>Cardiac care</label>
         </div> 
       
         <div>
            <input type="checkbox" value={"Diabetes care"} onChange={handleChange}></input>
            <label>Diabetes care</label>
         </div>
         <div>
            <input type="checkbox" value={"Bone care"} onChange={handleChange}></input>
            <label>Bone care</label>
         </div>
         <div>
            <input type="checkbox" value={"Muscle care"} onChange={handleChange}></input>
            <label>Muscle care</label>
         </div>

        
         
         </div>



         <div id="brand">Brand
         <div>
            <input type="checkbox" value={"Tata"} onChange={handleChangeBrand}></input>
            <label>Tata</label>
         </div>
         <div>
            <input type="checkbox" value={"Medicure"} onChange={handleChangeBrand}></input>
            <label>Medicure</label>
         </div> 
         </div>

       
         
    </div>
   

  )
}

// const DIV = styled.div`

// `;