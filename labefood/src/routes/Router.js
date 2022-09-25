import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AddressRegistration} from "../pages/addressregistration/AddressRegistration"
import {Feed} from "../pages/feed/Feed"
import {LoginPage} from "../pages/loginpage/LoginPage"
import {Restaurants} from "../pages/restaurants/Restaurants"
import { Search } from "../pages/search";
import {Signup} from "../pages/signup/Signup"
import { HomePage } from "../pages/homepage/HomePage";

export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/AddressRegistration" element={<AddressRegistration/>}/>
                <Route path="/Feed" element={<Feed/>}/>
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/Restaurants" element={<Restaurants/>}/>
                <Route path="/buscar" element={<Search/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )

}