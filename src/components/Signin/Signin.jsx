import React, {useContext, useState} from 'react'
import {Navigate} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import { loginService, getCategory } from '../../Services';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButtom} from './SigninElements'




const  Signin = () => {
    const{saveToken, user: token} = useContext(UserContext);
   
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData)
        const user = await loginService(dataObject);
        const category = await getCategory(dataObject);
        saveToken(user.detail);
        userCategory(category.detail.type)
        e.target.reset();
    };

    const userCategory = (category)=>{
        if(category === 'admin'){
            localStorage.setItem('isAdmin', true);
        }else{
            localStorage.setItem('isAdmin', false);
        }
        
    }
    const redirect = <Navigate to='/' />
    return(
        token ? redirect :
         <Container>
                <FormWrap>
                <FormContent>
                 <Form onSubmit={onSubmit}>
                        <FormH1>Ingresa los datos de tu cuenta</FormH1>
                        <FormLabel html='for'>Email:</FormLabel>
                        <FormInput type='email'placeholder="email" name="mail" required />
                        <FormLabel html='for'>Contraseña:</FormLabel>
                        <FormInput type='password' placeholder="Password" name="password" required />
                        <FormButtom type='submit' value="Login"> Continuar</FormButtom>
                    </Form>
                </FormContent>
                </FormWrap>
            </Container>
   )
}

export default Signin;