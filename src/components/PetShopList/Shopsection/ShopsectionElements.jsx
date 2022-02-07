import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ShopContainer = styled.div`
    width: 90vw;
    background: white;
`
export const ShopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-line: 2px;

`  
export const ShopCard = styled.div`
    background: #DFEBED;
    height: 750px;
    display: flex;
    margin: 50px auto;
    flex-direction: row;
    gap: 10px;
    border-radius: 2em;
    align-items: center;
    max-height: 440px;
    padding: 30px;

    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
   
`

export const ProductImg = styled.img`
    height: 40%;
    width: 250px;
    border-radius: 8px;
    border: 1px solid #ddd;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProductName = styled.h3`
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    color: #7EA5C9;
`
export const ProductDesc = styled.p`
    text-align: left;
    font-size: 18px;
    max-width: 80%;
    margin-bottom: .4em;
    
`
export const ProducPrice = styled.p`
    text-align: left;
    font-size: 18px;
    color: #7EA5C9;
`

export const LinkProduct = styled(Link)`
 text-decoration: none;
 justify-content: center;
 text-decoration-line: none

`

export const ButtonAdd = styled(Link)`
    background: #5B8FBF;
    padding: 20px 20px;
    border: 2px;
    border-radius: 4px;
    color: white;
    font-size: 40 px;
    margin-top: 10px;
    gap: 20px;
    cursor: pointer; 
    text-decoration: none;
    justify-content: center;
    text-decoration-line: none

    @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
    }
`

export const BtnWrapper = styled.div`

`