import React from "react";
import Home from "./components/Home";
import Perfil from "./components/Perfil";

import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/perfil" element={<Perfil/>} />
            </Routes>
        </BrowserRouter>
    )
}