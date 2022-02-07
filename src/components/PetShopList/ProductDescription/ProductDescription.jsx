import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import {WrappArea, WrappProduct, WrappImage, ProductImg, WrappInfo, H2, 
    PDescrip, BtnWrapper, BtnBuy, GoBack} from './ProductDescriptionElement'
import {getProductInfo} from '../../../Services'
import { UserContext } from "../../../context/UserContext";


   
 export function ProductInfo ({catID}) {
    const params = useParams();
    console.log(params);
    const [product, setProduct] = useState();
    const[ cart, setCart ] = useState([]);
    const{addCart, user: {token}} = useContext(UserContext);
    
 const getProdInfo = async () =>{
    const product = await getProductInfo(params.id)
    setProduct(product)
    return null;
    }

    const addOnCart = (product) =>{
       
    }

    useEffect(() =>{
        getProdInfo(params)
       }, [])

    return(
        
        <WrappArea>
           {product ? ( 
        <WrappProduct>
        <WrappImage><ProductImg src={`${process.env.REACT_APP_API_IMG}/${product.img}`}/></WrappImage>
        <WrappInfo>
            <H2>{product.productName}</H2>
            <PDescrip>{product.description}</PDescrip>
            <PDescrip>$ {product.price}</PDescrip>
            <PDescrip>{product.qty}pzs - on Stock</PDescrip>
        </WrappInfo>
        <BtnWrapper>
            <BtnBuy onClick={() => addOnCart(product)} to={`/shopSection/${product.category}`}>Buy Now</BtnBuy>
    </BtnWrapper>
    </WrappProduct>   
        ) : (
            <WrappProduct>
                <WrappImage><ProductImg/></WrappImage>
                <WrappInfo>
                    <H2></H2>
                    <PDescrip></PDescrip>
                    <PDescrip></PDescrip>
                    <PDescrip>pzs - on Stock</PDescrip>
                </WrappInfo>
                <BtnWrapper>
                    <GoBack to='/'>Go Back</GoBack>
            </BtnWrapper>
            </WrappProduct>
        )


        }
            
            
            </WrappArea>   
    )
}