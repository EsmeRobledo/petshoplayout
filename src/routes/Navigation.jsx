import React, {useState, useEffect, useContext} from "react";
import {animateScroll as scroll} from 'react-scroll'
import {NavWrapper, NavbarContainer, NavLogo, 
    MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLinksR} from "./NavbarElements"
    import { FaBars } from 'react-icons/fa'
import { UserContext } from "../context/UserContext";
import {Nav, Navbar, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'


   
function Navigation({toggle,productData}){
    const [scrollNav, setScroolNav] = useState(false)
    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScroolNav(true)
        }else{
            setScroolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const {user: token = null} = useContext(UserContext);
    
    const publicRoutes=[
        <Nav.Link key={1}><NavBtnLink to='/signin'>Sign In</NavBtnLink></Nav.Link>,
        <Nav.Link key={2}><NavLinksR to='/signup'>Sign Up</NavLinksR></Nav.Link>
    ]

    const privateRoutes =[
        <Nav.Link key={3}><NavBtnLink to='/checkout'>Check out</NavBtnLink></Nav.Link>,
        <Nav.Link key={4}><NavBtnLink to='/logout'>Log out</NavBtnLink></Nav.Link>
    ]
    return (
       <>
         <NavWrapper scrollNav={scrollNav}>
                <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}>Pet Shop</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Shopforpet' smooth={true} duration={500} spy={true} exact='true' offset={-60} >Comprar en linea</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='PetServices' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Servicios</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/help' >Ayuda</NavLinksR>
                       </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav>
                            {token ? privateRoutes : publicRoutes}
                        </Nav>
                    </NavBtn>
                   
                 </NavbarContainer>
            </NavWrapper>
       </>
    )
}

export {Navigation};