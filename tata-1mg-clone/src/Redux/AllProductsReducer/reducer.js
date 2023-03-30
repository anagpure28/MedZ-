import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_VITAMIN_SUCCESS } from "./actionType";

const initState = {
    isLoading : false,
    isError : false,
    vitamins : [],
}

export const reducer=(state=initState,action)=>{
    const { type,payload } = action;
    switch(type){
        case GET_PRODUCT_REQUEST : return { ...state , isLoading : true };
        case GET_VITAMIN_SUCCESS : return { ...state , isLoading : false , vitamins : payload };
        case GET_PRODUCT_FAILURE : return { ...state , isLoading : false , isError : true };
        default : return state;
    }
}