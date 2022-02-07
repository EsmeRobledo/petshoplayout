import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PaypalButton from  "../PaypalButton/PayPalButton"
import {H2Message, ProductWraper, ImgWraper, H3Price, PDescription, 
    ImgDisplay,AmountWrapp, BtnControl, WrapTotal, DivProdDetail} from './CheckoutElements'
import {axios} from 'axios'

function Checkout () {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
   

    const PRODUCTTEST =[
        {
            productName: 'Blue Buffalo Wilderness',
            price: '30',
            quantity: '2',
            description: 'Chicken Adult dog food 16lb',
            img: 'blueDogfood.jpg'

        },
        {
            productName: 'Iams dog Food',
            price: '25.6',
            quantity: '1',
            description: '30lb chicken&whole grains recipie dry food adult',
            img: 'iamsdogfood.jpg'

        }
    ]
    
    const getTotal = () =>{
        if(cart === null || cart.length === 0){
            return null
        }
        const sumTotal = cart.reduce((acc, currProduct) =>{
            const {price, qty} = currProduct;
            const totalCost = parseFloat(currProduct.price) * qty;
            return acc + totalCost;

        }, 0);

    }


    useEffect(() =>{
        setCart(PRODUCTTEST);
        getTotal(cart)
    }, [])



    
   /* if(cart === null || cart.length === 0){
         return  <H2Message>Empy cart</H2Message>
       }*/
   return(
        <>
            
        {cart.map((product, index) => (
                    <ProductWraper>
                    <ImgWraper key={index}>
                        <ImgDisplay src={`${process.env.REACT_APP_API_IMG}/${product.img}`}/>
                    </ImgWraper>
                    <DivProdDetail>
                        <H2Message>{product.productName}</H2Message>
                        <H3Price>${product.price * product.quantity}</H3Price>
                       

                        <PDescription>{product.description}</PDescription>
                    </DivProdDetail>
                    <AmountWrapp>
                            <BtnControl> - </BtnControl>
                            <BtnControl> + </BtnControl>
                            <BtnControl> X </BtnControl>
                    </AmountWrapp>
             </ProductWraper>
             
             
        ))}
                <WrapTotal>
                    <H3Price>Total: $ 85.60 </H3Price>
                </WrapTotal>
           
            <PaypalButton currency="MXN" />
    
             
            
               
        </>
    )
}

export default Checkout;