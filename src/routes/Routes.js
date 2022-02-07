import React, { useContext } from "react"
import {Routes, Route, Navigate} from 'react-router-dom';
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";
import Help from "../components/Help/Help"
import Home from "../components/Home/Home"
import {PrivateRoutes} from "./PrivateRoutes";
import Checkout from "../components/Checkout/Checkout"
import Logout from './../components/Logout/Logout';
import UserProfile from './../components/UserProfile/UserProfile';
import Shopforsection from '../components/PetShopList/Shopsection/Shopforsection'
import ProductForm from '../components/ProductForm/ProductForm'
import { UserContext } from "../context/UserContext";
import {ProductInfo} from '../components/PetShopList/ProductDescription/ProductDescription'

const RoutesComponent = () => {
    const { user: { token, type } } = useContext(UserContext);
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/help" element={<Help />} />
            {!token && <Route path="/signup" element={<Signup />} />}
            {!token && <Route path="/signin" element={<Signin />} />}
            <Route path="/shopSection/:id" element={<Shopforsection />} />
            <Route path="/checkout" element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
            <Route path="/logout" element={<PrivateRoutes><Logout /></PrivateRoutes>} />
            <Route path="/profile" element={<PrivateRoutes><UserProfile /></PrivateRoutes>} />
            <Route path="/ProductInfo/:id" element={<ProductInfo />}/>
            {type && <Route path="/products" element={<PrivateRoutes><ProductForm /></PrivateRoutes>} />}

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
};

export default RoutesComponent;

