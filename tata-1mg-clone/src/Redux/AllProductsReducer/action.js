import { GET_AYURVEDA_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_SUPPLEMENTS_SUCCESS, GET_TEST_TRIP_SUCCESS, GET_VITAMIN_SUCCESS } from "./actionType"
import axios from 'axios';
export const getVitamin=(data)=>(dispatch)=>{
    dispatch({ type : GET_PRODUCT_REQUEST });
    return axios.get(`https://good-pear-cheetah-tutu.cyclic.app/vitamin`,data).then((res)=>{
        dispatch({ type : GET_VITAMIN_SUCCESS , payload : res.data });
    }).catch(()=>{
        dispatch({ type : GET_PRODUCT_FAILURE });
    })
}


export const getAyurveda=(data)=>(dispatch)=>{
    dispatch({ type : GET_PRODUCT_REQUEST });
    axios.get(`https://good-pear-cheetah-tutu.cyclic.app/ayurveda`,data).then((res)=>{
        dispatch({ type : GET_AYURVEDA_SUCCESS , payload : res.data });
    }).catch(()=>{
        dispatch({ type : GET_PRODUCT_FAILURE });
    })
}

export const getSupplements=(data)=>(dispatch)=>{
    dispatch({ type : GET_PRODUCT_REQUEST });
    axios.get(`https://good-pear-cheetah-tutu.cyclic.app/supplements`,data).then((res)=>{
        dispatch({ type : GET_SUPPLEMENTS_SUCCESS , payload : res.data });
    }).catch(()=>{
        dispatch({ type : GET_PRODUCT_FAILURE });
    })
}


export const getTestTrip=(data)=>(dispatch)=>{
    dispatch({ type : GET_PRODUCT_REQUEST });
    axios.get(`https://good-pear-cheetah-tutu.cyclic.app/teststrip`,data).then((res)=>{
        dispatch({ type : GET_TEST_TRIP_SUCCESS , payload : res.data });
    }).catch(()=>{
        dispatch({ type : GET_PRODUCT_FAILURE });
    })
}