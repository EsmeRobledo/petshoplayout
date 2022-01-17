import React from 'react'
import Icon1 from '../../images/gromming1.png'
import Icon2 from '../../images/Veterinary-amico.svg'
import Icon3 from '../../images/undraw_pet_adoption_-2-qkw.svg'
import Icon4 from '../../images/Good doggy-pana.svg'
import Icon5 from '../../images/Pharmacist-cuate.svg'
import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2} from './PetServicesElements'

function PetServices(){
    return(
        <>
            <ServicesContainer id='PetServices'>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Baño y Corte</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Veterinario</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Adopciones</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4} />
                        <ServicesH2>Entrenamiento</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon5} />
                        <ServicesH2>Farmacia</ServicesH2>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>    
    )

}

export default PetServices