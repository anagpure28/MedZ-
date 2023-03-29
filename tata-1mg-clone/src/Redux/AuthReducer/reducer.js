import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType";

const initState = {
    isLoading : false,
    isError : false,
    isAuth : false,
    token : '',
    users : [],
}

export const reducer=(state=initState,action)=>{
    const { type,payload } = action;
    switch(type){
        case USER_REQUEST : return { ...state , isLoading : true };
        case USER_SUCCESS : return { ...state , isLoading : false , isAuth : true , token : payload };
        case USER_FAILURE : return { ...state , isLoading : false , isError : true };
        case LOGIN_REQUEST : return { ...state , isLoading : true };
        case LOGIN_SUCCESS : return { ...state , isLoading : false , users : payload };
        case LOGIN_FAILURE : return { ...state , isLoading : false , isError : true }
        default : return state;
    }
}