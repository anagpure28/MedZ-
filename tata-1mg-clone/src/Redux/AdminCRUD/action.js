import axios from "axios"
import { CRUD_FAILS, CRUD_PATCH_REQUEST_SUCCESS, CRUD_POST_REQUEST_SUCCESS, CRUD_REQUEST } from "./actiontype"
import { Vitamin } from "../AdminAlldataReducer/action"
import { GET_PRODUCT_REQUEST } from "../AdminAlldataReducer/actiontype"


// const getdata = () => {
//   return axios.get(`https://good-pear-cheetah-tutu.cyclic.app/vitamin`)
//     .then((res)=>console.log(res))
// }

export const postdata =(obj)=>async(dispatch)=>{
    try {
      dispatch({type:CRUD_REQUEST})
      let res= await axios.post(`https://good-pear-cheetah-tutu.cyclic.app/vitamin`,obj)
      dispatch({type:CRUD_POST_REQUEST_SUCCESS})       
    } catch (error) {
       dispatch({type:CRUD_FAILS})
    }

}

export const patchdata =(id,obj)=>async(dispatch)=>{

  try {
    dispatch({type:CRUD_REQUEST})
    let res = axios.patch(`https://good-pear-cheetah-tutu.cyclic.app/vitamin/${id}`,{
      obj
    })
    dispatch({type:CRUD_PATCH_REQUEST_SUCCESS})
  } catch (err) {
    dispatch({type:CRUD_FAILS})
    
  }

}

export const deletedata= (id)=>async(dispatch)=>{

  try {
   let res= axios.delete(`https://good-pear-cheetah-tutu.cyclic.app/vitamin/${id}`)

    
  } catch (err) {
    
  }

}