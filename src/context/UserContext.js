import React, {useState} from 'react';

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;


const UserProvider = ({children}) =>{
    const [user, setUser] = useState({token: 'Sin Tolken'});
    

    const saveToken = (token) =>{
        localStorage.setItem('token', token);
        setUser({token})
    }
    const clearToken = () =>{
        localStorage.clear();
        setUser(null)
    }

    return(
        <Provider value={{user, saveToken, clearToken}}>
            {children}
        </Provider>
    )
};

export {UserProvider, Consumer as UserConsumer, UserContext}