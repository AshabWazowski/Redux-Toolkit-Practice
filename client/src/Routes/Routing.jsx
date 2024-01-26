import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../component/Landing/LandingPage";
import Login from "../component/Login";
import Register from "../component/Register";



const Routing = () =>{
    return(
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                
            </Routes>
    );
}
export default Routing