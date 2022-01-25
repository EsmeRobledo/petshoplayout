import React, {useContext, useState} from 'react'
import Icon1 from '../../images/dalmata.jpg'
import Icon2 from '../../images/tuxido.jpeg'
import Icon3 from '../../images/peces-crecen-P.png'
import Icon4 from '../../images/reptile-4092178_960_720_grande.jpg'
import Icon5 from '../../images/hamster.jpg'
import {ListContainer, ListWrapper, ListCard, ListIcon, CategoryLink, ListH1 } from './PetShopListElements'


function PetShopList(){
    
    return(
        <>
            <ListContainer id='Shopforpet'>
                <ListH1>Navega en nuestro inventario de productos por mascota</ListH1>
                <ListWrapper>
                    <ListCard>
                        <ListIcon src={Icon1} />
                        <CategoryLink to='/shopSection/Dog'>Perros</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon2} />
                        <CategoryLink to='/shopSection/Cat'>Gatos</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon3} />
                        <CategoryLink to='/shopSection/Fish'>Peces</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon4} />
                        <CategoryLink to='/shopSection/Reptile'>Reptiles</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon5} />
                        <CategoryLink to='/shopSection/SmallPet'>Pequeñas Especies</CategoryLink>
                    </ListCard>
                   
                </ListWrapper>
            </ListContainer>
        </>    
    )

}

export default PetShopList