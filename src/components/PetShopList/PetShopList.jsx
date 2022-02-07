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
                <ListH1>Find what you need for your best friend</ListH1>
                <ListWrapper>
                    <ListCard>
                        <ListIcon src={Icon1} />
                        <CategoryLink to='/shopSection/Dog'>Dogs</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon2} />
                        <CategoryLink to='/shopSection/Cat'>Cats</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon3} />
                        <CategoryLink to='/shopSection/Fish'>Fish</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon4} />
                        <CategoryLink to='/shopSection/Reptile'>Reptiles</CategoryLink>
                    </ListCard>
                    <ListCard>
                        <ListIcon src={Icon5} />
                        <CategoryLink to='/shopSection/SmallPet'>Small Pets</CategoryLink>
                    </ListCard>
                   
                </ListWrapper>
            </ListContainer>
        </>    
    )

}

export default PetShopList