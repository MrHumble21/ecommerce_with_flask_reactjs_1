import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import AdminMain from "./components/admin_panel/AdminMain";
import Admin from "./components/Admin";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/cabinet" element={<Main/>}/>
            <Route path="/logout" element={<Main/>}/>
            <Route path="/admin" element={<AdminMain/>}/>
            <Route path="/product-list" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
