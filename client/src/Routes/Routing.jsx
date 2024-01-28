import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../component/Landing/LandingPage";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../component/Home";



const Routing = () =>{
    return(
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>

                
            </Routes>
    );
}
export default Routing