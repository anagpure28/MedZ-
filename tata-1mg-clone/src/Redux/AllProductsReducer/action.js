import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_VITAMIN_SUCCESS } from "./actionType"
import axios from 'axios';
export const getVitamin=(data)=>(dispatch)=>{
    dispatch({ type : GET_PRODUCT_REQUEST });
    axios.get(`https://good-pear-cheetah-tutu.cyclic.app/vitamin`,data).then((res)=>{
        dispatch({ type : GET_VITAMIN_SUCCESS , payload : res.data });
    }).catch(()=>{
        dispatch({ type : GET_PRODUCT_FAILURE });
    })
}