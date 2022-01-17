import React, {useContext, useState} from 'react'
import {Navigate} from 'react-router-dom'
import {SignupService} from '../../Services'
import { UserContext } from '../../context/UserContext';
import {Container, FormWrap, FormContent, Form, FormH1, FormH2, FormLabel, FormInput, FormButtom, DivWrapper, Divformwrap } from './SignupElements'

const  Signup = () => {
    const{saveToken, user: token} = useContext(UserContext);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await SignupService(dataObject)
        saveToken(user.detail)
        console.log('data: '+ dataObject)
        e.target.reset(); 

    };
    return(
        
            <Container>
                <FormWrap>
                <FormContent>
                    <Form onSubmit={onSubmit}>
                    <FormH1>Registrate para comprar en linea</FormH1>
                    <DivWrapper>
                      <Divformwrap>
                        <FormLabel htmlFor='for'>Nombre:</FormLabel>
                        <FormInput type='nombre' name="firstname" required />
                        <FormLabel htmlFor='for'>Apellido:</FormLabel>
                        <FormInput type='apellido' name="lastname" required />
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email' name="mail" required />
                        <FormLabel htmlFor='for'>Telefono:</FormLabel>
                        <FormInput type='telefono' name="phone" required />
                        <FormLabel html='for'>Contraseña:</FormLabel>
                        <FormInput type='password' name="password" required />
                     </Divformwrap>
                      <Divformwrap>
                        <FormH2>Ingresa la direccion que usaras para tus pedidos</FormH2>
                        <FormLabel htmlFor='for'>Calle y Numero:</FormLabel>
                        <FormInput type='nombre' name="Street" required />
                        <FormLabel htmlFor='for'>Ciudad:</FormLabel>
                        <FormInput type='apellido' name="City" required />
                        <FormLabel htmlFor='for'>Estado:</FormLabel>
                        <FormInput type='state' name="State" required />
                        <FormLabel htmlFor='for'>Codigo Postal:</FormLabel>
                        <FormInput type='telefono' name="PC" required />
                        <FormButtom type='submit'> Continuar</FormButtom>
                     </Divformwrap>  
                </DivWrapper>     
                    </Form>
                </FormContent>
                </FormWrap>
            </Container>
   )
}

export default Signup;