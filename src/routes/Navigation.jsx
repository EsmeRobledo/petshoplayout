import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, 
    MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLinksR} from "./NavbarElements"
    import { FaBars } from 'react-icons/fa'


   


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
    return (
       <>
         <Nav scrollNav={scrollNav}>
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
                       <NavItem>
                            <NavLinksR to='/signup'>Sign up</NavLinksR>
                       </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export {Navigation};