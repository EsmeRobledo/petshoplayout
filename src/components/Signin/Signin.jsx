import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import { loginService } from '../../Services';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButtom} from './SigninElements'




const  Signin = () => {
    const{saveToken, user: token} = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDEfault();
        const formData = new FormData(e.target);
        const dataObject = Object.formEntries(formData)
        const user = await loginService(dataObject);
        saveToken(user.detail);
        e.target.reset();
    };
    const redirect = <Navigate to='/' />
    return(
        token ? redirect :
         <Container>
                <FormWrap>
                <FormContent>
                 <Form onSubmit={onSubmit}>
                        <FormH1>Ingresa los datos de tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email:</FormLabel>
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