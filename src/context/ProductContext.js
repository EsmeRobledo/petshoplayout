import React, { useState } from 'react';



const URL_ROOT = `${process.env.REACT_APP_API}/product`;
const ProductContext = React.createContext();
const {Provider, Consumer} = ProductContext;

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    
    return(
        <Provider value={{products}}>
            {children}
        </Provider>
    )
};

export {ProductProvider, Consumer as ProductConsumer, ProductContext}
