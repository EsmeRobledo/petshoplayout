import React from 'react'
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, Text, FormButtom} from './SigninElements'
function Signin(){

    return(
        <>
            <Container>
                <FormWrap>
                <FormContent>
                    <Form action="#">
                        <FormH1>Ingresa los datos de tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel html='for'>Contraseña:</FormLabel>
                        <FormInput type='password' required />
                        <FormButtom type='submit'> Continuar</FormButtom>
                        <FormButtom type='cancel'> Cancelar</FormButtom>
                        <Text>Olvidaste tu contraseña, da click aqui</Text>
                    </Form>
                </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin;