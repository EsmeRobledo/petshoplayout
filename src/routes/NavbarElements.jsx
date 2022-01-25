import styled from 'styled-components'
import {Link as LinkR}  from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const NavWrapper = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#D0E0E3' : 'trasnparent')};
    height: 80px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    position: sticky;
    border: none;
    z-index: 10;
    top: 5px;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #45818E;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 10px
    font-family: 'Hind Siliguri', sans-serif;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#cfdee3;
        color: #759EC2;
    }

`

export const MobileIcon = styled.div`
display: none;
   
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 24px;
        cursor: pointer;
        color: black;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
        @media screen and (max-width: 768px){
            display: none;
        }
`

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #45818E;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Hind Siliguri', sans-serif;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#cfdee3;
        color: #759EC2;
    }

    &.active{
       /*Cambiara el color de la linea inferior al momento de activar el menu seleccionado*/
        border-bottom: 3px splid blue;
    }

   
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`;
export const NavLinksR = styled(LinkR)`
    color: #45818E;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: poiter;
    font-family: 'Hind Siliguri', sans-serif;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:#cfdee3;
        color: #759EC2;
    }

    &. active{
      border-bottom: 3px splid blue;
    }

   
`
export const NavButtonsdiv = styled.div`
    display: flex;
    flex-direction: row;
`
export const NavBtnLink = styled(LinkR)`
    background: #99cccc;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: poiter;
    border-radius: 25px;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Hind Siliguri', sans-serif;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:#cfdee3;
        color: #759EC2;
    }
   
`;