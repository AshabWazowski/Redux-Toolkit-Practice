import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const BASE_URL = process.env.REACT_APP_BASEURL;

export const register = async(values) =>{
        try{
            await axios.post(`${BASE_URL}/auth/register`, values)
           
        }catch(error){
        console.log("Error :", error.message);
        }
}

export const login = async (value)=>{

    try{
       const login = await axios.post(`${BASE_URL}/auth/login`, value)
       return login;
    }catch(error){
             console.log("Login Error:",error.message);
            }
}

export const addData = async (values) =>{
    try{
            await axios.post(`${BASE_URL}/data/addData`, values);

    }catch(err){
        console.log(err);
    }
}

export const getData = async (id) =>{
    try{
            const data = await axios.get(`${BASE_URL}/data/${id}/getData`)
            return data;
    }catch(err){
        console.log(err.message);
    }
}