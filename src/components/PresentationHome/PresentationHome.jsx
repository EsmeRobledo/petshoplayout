import React from 'react'
  
import imghome from '../../images/Pet-3.jpg'
import imgcontent from '../../images/toys.jpg'
import imgitem1 from '../../images/pet-food.jpg'
import imgitem2 from '../../images/pet-accessories.jpg'
import imgitem3 from '../../images/Gold-Fish-in-Bowl.jpg'
import { HomeBg, Homeitemheader, Homeitemnav, Homeitemcontents, Homeitemaside,
    HomeContainer, Imgitemnav, ImgContent, ImgItem, Homeitem, Homeitem2} from './PresentationHomeElements';


const PresentationHome = () => {
  
    return (
        <HomeContainer id="home">
            <HomeBg>
                <Homeitemheader>
                Una tienda con todo lo que necesitas para tu mascota
                </Homeitemheader>
                <Homeitemnav ><Imgitemnav src={imgcontent}/></Homeitemnav>
                <Homeitemcontents ><ImgContent src={imghome}/></Homeitemcontents>
                <Homeitemaside ><ImgItem src={imgitem1}/></Homeitemaside>
                <Homeitem ><ImgItem src={imgitem2}/></Homeitem>
                <Homeitem2><ImgItem src={imgitem3}/></Homeitem2>
                
            </HomeBg>
        </HomeContainer>
    )
}

export default PresentationHome
