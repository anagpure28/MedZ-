import { GET_AYURVEDA_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_SUPPLEMENTS_SUCCESS, GET_TEST_TRIP_SUCCESS, GET_VITAMIN_SUCCESS } from "./actionType";

const initState = {
    isLoading : false,
    isError : false,
    vitamins : [],
    ayurveda : [],
    supplements : [],
    teststrip : [],
}

export const reducer=(state=initState,action)=>{
    const { type,payload } = action;
    switch(type){
        case GET_PRODUCT_REQUEST : return { ...state , isLoading : true };
        case GET_VITAMIN_SUCCESS : return { ...state , isLoading : false , vitamins : payload };
        case GET_PRODUCT_FAILURE : return { ...state , isLoading : false , isError : true };
        case GET_AYURVEDA_SUCCESS : return { ...state , isLoading : false , ayurveda : payload };
        case GET_SUPPLEMENTS_SUCCESS : return { ...state , isLoading : false , supplements : payload };
        case GET_TEST_TRIP_SUCCESS : return { ...state , isLoading : false , teststrip : payload }
        default : return state;
    }
}