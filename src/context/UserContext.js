import React, {useState} from 'react';

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;


const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        token: null,
        type: null
    });
    const [cart, setCart] = useState([])//es para almacenar los productos seleccionados en la sesion del usuario
    

    const saveToken = (token, type) =>{
        localStorage.setItem('token', token);
        localStorage.setItem('type', type === 'admin');
        setUser({token, type: type === 'admin'})
    }
    const clearToken = () =>{
        localStorage.clear();
        setUser({
            token: null,
            type: null
        })
    }

    const clearCar = () =>{
        localStorage.clear();
        setCart([]);
    }

    const addCart = async (product, token) => {
        console.log('product', product);
        console.log('token', token);
          //  localStorage.setItem('cart', [...cart, {...product, quantity: 1}])
        //setCart([...cart, {...product, quantity: 1}])

        
       // if(!token) return alert("Please login to continue buying")

        const check = cart.every(itme =>{
            return itme._id !== product
        })

       /* if(check){
            setCart([...cart, {...product, quantity: 1}])
            localStorage.setItem('cart', cart)
        }else{
            alert("This product has been added to cart")
        }*/
    }

    return(
        <Provider value={{user, saveToken, clearToken, cart, addCart, clearCar}}>
            {children}
        </Provider>
    )
};

export {UserProvider, Consumer as UserConsumer, UserContext}