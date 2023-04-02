

import axios from 'axios'
import { error } from 'jquery';
export const AdminGetUser=()=>{
    return axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
}

export const UserDataLogin=() => {
    return axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
        
};