import React from 'react'
import {Helpcontainer, HelpWrapper, HelpH1, WrapperOptions, HelpDivOptions,
    HelpOptH1, HelpLink, Wrapperheadear, Icon} from './HelpElements' 
    
function Help(){
    return(
        <>
            <Helpcontainer id='help'> 
                    <Wrapperheadear>
                        <HelpH1>Como podemos Ayudarte</HelpH1>
                    </Wrapperheadear>
                    
                <HelpWrapper>
                    <WrapperOptions>
                        <HelpDivOptions>
                            <HelpOptH1>Compras</HelpOptH1>
                            <HelpLink to='/shopforpet' >Compra en Linea</HelpLink>
                            <HelpLink to='/sucursul' >Compra en Tienda</HelpLink>
                            <HelpLink to='/farSucursal' >Farmacia</HelpLink>
                            <HelpLink to='/signin' >Modificar o cancelar ordenes</HelpLink>
                            <HelpLink to='/promo' >Codigos y promociones</HelpLink>
                        </HelpDivOptions>
                        <HelpDivOptions>
                            <HelpOptH1 to='/'>Cambios y Devoluciones</HelpOptH1>
                            <HelpLink to='/'>Devoluciones en tienda</HelpLink>
                            <HelpLink to='/'>Devolucion de comida</HelpLink>
                            <HelpLink to='/'>Devolucion de productos en diferentes tiendas</HelpLink>
                        </HelpDivOptions>
                        <HelpDivOptions>
                            <HelpOptH1 >Politicas y Terminos</HelpOptH1>
                            <HelpLink to='/'>Terminos de Uso</HelpLink>
                            <HelpLink to='/'>politicas de Privacidad</HelpLink>
                            <HelpLink to='/'>Errores de precio o errores de emision</HelpLink>
                            <HelpLink to='/'>Seguridad al comprar</HelpLink>
                        </HelpDivOptions>
                        <HelpDivOptions>
                            <HelpOptH1>Entregas a domicilio</HelpOptH1>
                            <HelpLink to='/'>Cargos por entregas y tiempos</HelpLink>
                            <HelpLink to='/'>Entrega de mascotas a domicilio</HelpLink>
                         </HelpDivOptions>
                    </WrapperOptions>
                  </HelpWrapper>
                  <Icon to="/">Regresar al Inicio</Icon>
            </Helpcontainer>
        </>
    )
}

export default Help;