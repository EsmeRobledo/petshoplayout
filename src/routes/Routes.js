import React from "react"
import {Routes, Route} from 'react-router-dom';
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";
import Help from "../components/Help/Help"
import Home from "../components/Home/Home"
import {PrivateRoutes} from "./PrivateRoutes";
import Checkout from "../components/Checkout/Checkout"
import Logout from './../components/Logout/Logout';


const RoutesComponent = () => (
    <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/signin" element={<Signin />}  />
        <Route path="/" element={<Home />} exact />
        <Route path="/checkout" element={<PrivateRoutes><Checkout/></PrivateRoutes>} />
        <Route path="/logout" element={<PrivateRoutes><Logout /></PrivateRoutes>} />
    </Routes>
);

export default RoutesComponent;

