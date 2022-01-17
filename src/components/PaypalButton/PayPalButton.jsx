import { useEffect } from "react";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js"

const PaypalButton = ({ currency, amount, style = { "layout": "horizontal"}}) => {
    const [{options}, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value:{
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

    return(
        <PayPalButtons style={style} disabled={false} forceReRender={[amount, currency, style]} fundingSource={undefined} createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units:[
                    {
                       amount: {
                           currency_code: currency,
                           value: amount,
                       }, 
                    },
                ],
            })
            .then((orderId) => {
                console.log(orderId)
                return orderId;
            });
        }}
        onApprove={function (data, actions){
            return actions.order.capture().then(function (){
                console.log(data)
            });
        }}
        />
        )
}

export default PaypalButton;
