import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const BASE_URL = process.env.REACT_APP_BASEURL;

// user Registration
export const register = async(values) =>{
        try{
            await axios.post(`${BASE_URL}/auth/register`, values)
           
        }catch(error){
        console.log("Error :", error.message);
        }
}

// User login and Authentication
export const login = async (value)=>{

    try{
       const login = await axios.post(`${BASE_URL}/auth/login`, value)
       return login;
    }catch(error){
             console.log("Login Error:",error.message);
            }
}

// Add the data to Database
export const addData = async (values) =>{
    try{
            await axios.post(`${BASE_URL}/data/addData`, values);

    }catch(err){
        console.log(err);
    }
}

// All the data of that particular User
export const getData = async (id) =>{
    try{
            const data = await axios.get(`${BASE_URL}/data/${id}/getData`)
            return data;
    }catch(err){
        console.log(err.message);
    }
}

// This data will be based on the id of the particular Data itself
// export const getDataById = async (id)=>{
//     try{

//         const data = await axios.get(`${BASE_URL}/data/${id}/edit`);
//             return data;
            
//     }catch(err){
//         console.log(err.message);
//     }
// }

// Update the data
export const updateData = async (values, id) =>{
    try{
        await axios.put(`${BASE_URL}/data/${id}/update`, values)

    }catch(error){
        console.log(error.message);
    }
}

// Delete the Data
export const deleteData = async (id)=>{
    try{
        await axios.delete(`${BASE_URL}/data/${id}/delete`);
    }catch(err){
        console.log("Delete Error",err.message);
    }
} 