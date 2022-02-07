import React, {useEffect, useContext, useState} from "react";
import { UserContext } from "../../context/UserContext";
import { Navigation } from "../../routes/Navigation";
import {Sidebar} from "../../routes/Sidebar/Sidebar"
import { useLocation, useSearchParams } from "react-router-dom";



const Layout = ({ children }) => {
    const location = useLocation();
    const [query] = useSearchParams();
    const { saveToken, clearToken } = useContext(UserContext)
    const verifyToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            saveToken(token, localStorage.getItem('type'));
        } else {
            clearToken();
        }
    }
    useEffect(() => {
        verifyToken();
    }, []);

    useEffect(() => {
        if (query.get('id')) {
            document.getElementById(query.get('id')).scrollIntoView();
        }
    }, [location]);

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            {children}
            
        </>
    )
}

export default Layout