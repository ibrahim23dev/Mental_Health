import React from 'react';
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;