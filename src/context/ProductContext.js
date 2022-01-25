import React, { useState, useReducer } from 'react';
import ProductReducer from './ProductReducer'
import axios from 'axios'


const URL_ROOT = `${process.env.REACT_APP_API}/product`;
const ProductContext = React.createContext();
const {Provider, Consumer} = ProductContext;

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const saveProducts = (products) => setProducts(products);
    const initialState = {
        products:[],
        product: [{
            id_:"",
            productName: "",
            description:"",
            price:"",
            qty:"",
            category:"",
            type:"",
            img:""
        }]
    }
    
    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async (category) =>{
        
           const res = await axios.get(`${URL_ROOT}/getproducts/${category}`);
    
           dispatch({
               type: "GET_PRODUCTS",
               playload: res.data.products
           })
           
      
     }
    
    return(
        <Provider value={{products: globalState.products,
         product: globalState.productName}}>
            {children}
        </Provider>
    )
};

export {ProductProvider, Consumer as ProductConsumer, ProductContext}
