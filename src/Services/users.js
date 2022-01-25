import axios  from 'axios';


const URL_ROOT = `${process.env.REACT_APP_API}/user`;

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

export const editUserService = async (user) =>{
    try{
        
        const resp = await axios.put(`${URL_ROOT}/editUser`, user)
        return resp.data
        
    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }
}

export const getUserProfile = async (user) =>{
    try{

        const resp = await axios.get(`${URL_ROOT}/profile`, user)
        return resp.data

    }catch(e){
        console.log('1', e.data.message)
        console.log('2', e.message)
    }

}
