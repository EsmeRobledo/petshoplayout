import styled from "styled-components";


export const ShopContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: black;
    color: #fff;
`
export const ShopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`  
export const ShopCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
    padding-top: 20px;
`

export const ProductImg = styled.img`
    height: 50%;
    width: 250px;
    border-radius: 8px;
    border: 1px solid #ddd;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`
export const ProductName = styled.h3`
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    color: red;
`
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    text-align: left;
    font-size: 16px;
`
export const ProducPrice = styled.p`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 18px;
    color: red;
`