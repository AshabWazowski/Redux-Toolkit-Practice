import axios from 'axios'
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
    if(login.status === 200){
        return 200;
    }else{
        return 300;
    }
    }catch(error){
                    console.log("Login Error:",error.message);
    }
}