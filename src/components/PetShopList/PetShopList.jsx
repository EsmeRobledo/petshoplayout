import React from 'react'
import Icon1 from '../../images/dalmata.jpg'
import Icon2 from '../../images/tuxido.jpeg'
import Icon3 from '../../images/peces-crecen-P.png'
import Icon4 from '../../images/reptile-4092178_960_720_grande.jpg'
import Icon5 from '../../images/hamster.jpg'
import {ListContainer, ListWrapper, ListCard, ListIcon, ListH2, ListH1 } from './PetShopListElements'
function PetShopList(){
    return(
        <>
            <ListContainer id='Shopforpet'>
                <ListH1>Selecciona tu mascota y descubre nuestras ofertas</ListH1>
                <ListWrapper>
                    <ListCard>
                        <ListIcon src={Icon1} />
                        <ListH2>Perros</ListH2>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon2} />
                        <ListH2>Gatos</ListH2>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon3} />
                        <ListH2>Peces</ListH2>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon4} />
                        <ListH2>Reptiles</ListH2>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon5} />
                        <ListH2>Pequeñas Especies</ListH2>
                    </ListCard>
                   
                </ListWrapper>
            </ListContainer>
        </>    
    )

}

export default PetShopList