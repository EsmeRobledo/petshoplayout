import axios  from 'axios';


const URL_ROOT = `${process.env.REACT_APP_API}/user`;
const URL_LOCAL =`${process.env.REACT_APP_API_LOCAL}/user`
export const SignupService = async (user) =>{
    try{
        const resp = await axios.post(`${URL_ROOT}/signup`, user);
        return resp.data
    }catch(e){

        console.log('1', e.data.message)
        console.log('2', e.message)
    }
    
}

export const loginService = async (user) =>{
    try{
        const resp = await axios.post(`${URL_ROOT}/login`, user);
        return resp.data
    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }
    
}

export const getCategory = async (user) =>{
    try{
        const resp = await axios.post(`${URL_ROOT}/category`, user);
        return resp.data
    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }
    
}

export const editUserService = async (user) =>{
    try{
         const resp = await fetch(`${URL_ROOT}/editUser`, {
            method:'PUT',
            headers: { Authorization: 'Bearer ' 
            + localStorage.getItem('token'), 'Content-Type': 'application/json' }, 
            body: JSON.stringify(user)
        })
        const jsonres = await resp.json()
        return jsonres
        
    }catch(e){
        console.error(e)
    }
}

export const getUserProfile = async () =>{
    try{
        const resp = await axios.get(`${URL_ROOT}/profile`,{
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            });
        return resp.data

    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }

}


export const deleteProfile = async () =>{
    try{
        const resp = await axios.delete(`${URL_ROOT}/delete`,{
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            });
    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }
}

export const editPassword = async (passdata) =>{
    try{
        const resp = await fetch(`${URL_ROOT}/changepass`, {
            method:'PUT',
            headers: { Authorization: 'Bearer ' 
            + localStorage.getItem('token'), 'Content-Type': 'application/json' }, 
            body: JSON.stringify(passdata)
        })
        const jsonres = await resp.json()
        
        return jsonres
        
    }catch(e){
        console.error(e)
    }
}


