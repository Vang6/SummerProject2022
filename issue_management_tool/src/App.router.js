import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SignIn, Raise, SignOut, Registration, Issues} from './screens';

const AppRouter= function(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path= "/" element={<SignIn/>}/>

            <Route path= "/raise" element={<Raise/>}/>

            <Route path= "/issues" element={<Issues/>}/>

            <Route path= "/signout" element={<SignOut/>}/>
            
            <Route path= "/registration" element={<Registration/>}/>

            
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter