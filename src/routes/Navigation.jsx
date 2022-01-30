import React, {useState, useEffect, useContext} from "react";
import {animateScroll as scroll} from 'react-scroll'
import {NavWrapper, NavbarContainer, NavLogo, 
    MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLinksR, NavButtonsdiv} from "./NavbarElements"
    import { FaBars } from 'react-icons/fa'
import { UserContext } from "../context/UserContext";
import {Nav, Navbar, Container } from 'react-bootstrap'
import getUserProfile from '../Services'



   
function Navigation({toggle}){
    const [scrollNav, setScroolNav] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
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
   
    const usertype = localStorage.getItem('isAdmin');
    if(usertype !== null && usertype === 'admin'){
       setisAdmin(true)
    }else{
        setisAdmin(!isAdmin);
    }
    const {user: token = null} = useContext(UserContext);

   return (
       <>
     {token ?  
     <NavWrapper scrollNav={scrollNav}>
     <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>Pet Shop</NavLogo>
         <MobileIcon onClick={toggle}>
             <FaBars/>
         </MobileIcon>
         <NavMenu>
             <NavItem>
                 <NavLinks to='Shopforpet'>our Products</NavLinks>
            </NavItem>
            <NavItem>
                 <NavLinks to='PetServices'>Services</NavLinks>
            </NavItem>
            <NavItem>
                 <NavLinksR to='/help'>Help</NavLinksR>
            </NavItem>
            <NavItem>
                 <NavLinksR to='/profile'>Profile</NavLinksR>
            </NavItem>
            {isAdmin? <NavItem>
                 <NavLinksR to='/Products'>Products</NavLinksR>
            </NavItem> : null}
            <NavItem>
                 <NavLinksR to='/logout' >Logout</NavLinksR>
            </NavItem>
         </NavMenu>
             <NavBtn><NavBtnLink to='/checkout'>Check out</NavBtnLink></NavBtn>
        </NavbarContainer>
    </NavWrapper> 
            :
            <NavWrapper scrollNav={scrollNav}>
                <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}>Pet Shop</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Shopforpet'>Shop</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='PetServices'>Services</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/help'>Help</NavLinksR>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/signin'>Sign In</NavLinksR>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/signup'>Sign Up</NavLinksR>
                       </NavItem>
                    </NavMenu>
                 </NavbarContainer>
            </NavWrapper>
          }
       </>
    )
}

export {Navigation};