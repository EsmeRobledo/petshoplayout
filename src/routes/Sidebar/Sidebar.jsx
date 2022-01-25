import React from "react";
import { SidebarContainer, Icon, 
    CloseIcon, SidebarWrapper, 
    SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute, SidebarLinkRoute } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) =>{
    return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={toggle} > Comprar en linea</SidebarLink>
                <SidebarLink to='/' onClick={toggle} > Servicios</SidebarLink>
                <SidebarLinkRoute to='/help' onClick={toggle} > Ayuda</SidebarLinkRoute>
                <SidebarLinkRoute to='/signup' onClick={toggle} > Sign up</SidebarLinkRoute>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export {Sidebar}