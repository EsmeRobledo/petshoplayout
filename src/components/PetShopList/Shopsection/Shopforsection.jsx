import React, { useContext, useEffect, useState} from 'react'
import {ShopContainer, ShopWrapper, LinkProduct, 
    ShopCard, ProductImg, ProductInfo, ProductName, 
    ProductDesc, ProducPrice, BtnWrapper, ButtonAdd} from './ShopsectionElements'
import { useParams } from 'react-router-dom'
import { getProducts } from './../../../Services/products';
import { UserContext } from '../../../context/UserContext';




function Shopsection ({catID}) {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    const{addCart, user: {token}} = useContext(UserContext);

 const prodCategory = async () =>{
       const products = await getProducts(id)
       setProducts(products)
       return null;  
   }
    const addOnCart = (productid) =>{
        addCart(productid, token);
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
                        <LinkProduct to={`/ProductInfo/${product._id}`} key={product._id}>  
                                <ProductImg src={`${process.env.REACT_APP_API_IMG}/${product.img}`}></ProductImg>
                        <ProductInfo>
                            <ProductName>{product.productName}</ProductName>
                            <ProductDesc>{product.description}</ProductDesc>
                            <ProducPrice>${product.price}</ProducPrice>
                        </ProductInfo>
                        </LinkProduct>
                        <BtnWrapper>
                            <ButtonAdd onClick={() => addOnCart(product._id)} to='/checkout'>Buy Now</ButtonAdd>
                         </BtnWrapper> 
                        </ShopCard>
                      
                        
                        );
                     })}
                </ShopWrapper>
            </ShopContainer>
       
    )
         
    }

    export default Shopsection;
 
 
    

