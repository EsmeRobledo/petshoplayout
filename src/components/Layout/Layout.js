import React, {useEffect, useContext, useState} from "react";
import { UserContext } from "../../context/UserContext";
import { Navigation } from "../../routes/Navigation";
import {Sidebar} from "../../routes/Sidebar/Sidebar"

const Layout = ({children}) => {
    const {saveToken, clearToken } = useContext(UserContext)
    const verifyToken = () => {
        const token = localStorage.getItem('token');
        if(token){
            saveToken(token);
        }else{
            clearToken();
        }
    }
    useEffect(() => {
        verifyToken();
    }, []);

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }  
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navigation toggle={toggle} />
            {children}
        </>
    )
}

export default Layout