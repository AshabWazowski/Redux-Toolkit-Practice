import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASEURL;

export const register = async(values) =>{
        try{
            axios.post(`${BASE_URL}/register`, values)
        }catch(error){
        console.log("Error :", error.message);
        }
}