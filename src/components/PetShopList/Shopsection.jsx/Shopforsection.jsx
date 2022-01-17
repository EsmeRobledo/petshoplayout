import React from 'react'
import { productData } from './Data'
import {ShopContainer, ShopWrapper, ShopCard, ProductImg, ProductInfo, ProductName, ProductDesc, ProducPrice} from './ShopsectionElements'

function Shopsection () {
    return(
        <>
            <ShopContainer>
                <ShopWrapper>
                    {productData.map((product, index) => {
                        return(
                        <ShopCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}></ProductImg>
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProducPrice>{product.price}</ProducPrice>
                        </ProductInfo>
                        </ShopCard>
                        );

                    })}
                    
                </ShopWrapper>
            </ShopContainer>
        </>
    )
}

export default Shopsection;