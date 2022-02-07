import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook,FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems, FooterLinkTitle, FooterLink, FooterInfo, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRightd, SocialIcons, SocialIconLink} from './FooterElements'


function Footer (){
    const togleHome =() =>{
        scroll.animateTopScroll();
    }
    return(
        <>
        <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Navigate</FooterLinkTitle>
                <FooterLink to='/'>Services</FooterLink>
                <FooterLink to='/'>Pharmacy</FooterLink>
                <FooterLink to='/'>Shop on Line</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle>Media</FooterLinkTitle>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
           
            <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Information</FooterLinkTitle>
                <FooterInfo>5080 Street Drive D, Sacramento</FooterInfo>
                <FooterInfo>petsho@gmail.com</FooterInfo>
                <FooterInfo>(916)-841-8886</FooterInfo>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Hour hand</FooterLinkTitle>
                <FooterInfo>Monday to Saturday</FooterInfo>
                <FooterInfo>9:00 A.M. - 8:30 P.M.</FooterInfo>
                <FooterInfo>Sunday 9:00 A.M - 6:00 P.M.</FooterInfo>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/" onClick={togleHome}>
                    PetShop
                </SocialLogo>
                <WebsiteRightd>Esmeralda Robledo ©{new Date().getFullYear()} All rights reserved. </WebsiteRightd>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Instagram"><FaInstagram/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Twitter"><FaTwitter/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Yelp"><FaYelp/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    </>

    )
   
}

export default Footer;