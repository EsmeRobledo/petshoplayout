import React from "react";
import PaypalButton from  "../PaypalButton/PayPalButton"


const Checkout = ({ order = [
    {productName : "Friskies pate",
    description : "chicken pate canned cat food",
    price : "3.50",
    qty: 120},
] }) => {
    const total = order.reduce((acc, val) => acc + val.price, 0)
    return(
        <>
            {order.map((product, index) => (
                <p key={index}>{`${product.productName} - ${product.price}`}</p>
            ))}
            {total}
            <PaypalButton currency="MXN" amount={total}/>
        </>
    )
}

export default Checkout;