import React, { useEffect, useState} from 'react'
import {ShopContainer, ShopWrapper, LinkProduct, 
    ShopCard, ProductImg, ProductInfo, ProductName, 
    ProductDesc, ProducPrice} from './ShopsectionElements'
import { useParams } from 'react-router-dom'
import { getProducts } from './../../../Services/products';

function Shopsection ({catID}) {
   
    const {id} = useParams()
    const [products, setProducts] = useState([])
 
 const prodCategory = async () =>{
       const products = await getProducts(id)
       setProducts(products)
       return null;  
   }
   useEffect(() =>{
    prodCategory()
   }, [])
  

    return(
            <ShopContainer>
                <ShopWrapper>
                {products.map((product) => {
                        return(
                        
                            <ShopCard key={product._id}>
                        <LinkProduct to={`/${product._id}`} key={product._id}>        
                                <ProductImg src={`${process.env.REACT_APP_API_IMG}/${product.category}/${product.img}`}></ProductImg>
                        </LinkProduct>        
                        <ProductInfo>
                            <ProductName>{product.productName}</ProductName>
                            <ProductDesc>{product.description}</ProductDesc>
                            <ProducPrice>${product.price}</ProducPrice>
                        </ProductInfo>
                        </ShopCard>
                      
                        
                        );
                     })}
                </ShopWrapper>
            </ShopContainer>
       
    )
         
    }

    export default Shopsection;
 
 
    

