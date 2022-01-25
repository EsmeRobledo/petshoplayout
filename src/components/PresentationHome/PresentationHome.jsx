import React from 'react'
import imgcontent from '../../images/AdobeStock_390123053.jpeg'

import { HomeBg, Homeitemnav,
    HomeContainer, Imgitemnav, } from './PresentationHomeElements';


const PresentationHome = () => {
  
    return (
        <HomeContainer id="home">
            <HomeBg>
                <Homeitemnav ><Imgitemnav src={imgcontent}/></Homeitemnav>
             </HomeBg>
        </HomeContainer>
    )
}

export default PresentationHome
