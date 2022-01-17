import React from 'react'
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButtom} from './SignupElements'

function Signup(){

    return(
        <>
            <Container>
                <FormWrap>
                <FormContent>
                    <Form action="#">
                        <FormH1>Crea una cuenta para comprar en linea</FormH1>
                        <FormLabel htmlFor='for'>Nombre:</FormLabel>
                        <FormInput type='nombre' required />
                        <FormLabel htmlFor='for'>Apellido:</FormLabel>
                        <FormInput type='apellido' required />
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Telefono:</FormLabel>
                        <FormInput type='telefono' required />
                        <FormLabel html='for'>Contraseña:</FormLabel>
                        <FormInput type='password' required />
                        <FormButtom type='submit'> Continuar</FormButtom>
                        <FormButtom type='cancel'> Cancelar</FormButtom>
                    </Form>
                </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signup;