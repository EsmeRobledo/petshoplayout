import React from 'react'
import imgcontent from '../../images/AdobeStock_390123053.jpeg'
import imgadop from '../../images/AdobeStock_301391379.jpeg'
import imgabat from '../../images/AdobeStock_343420849.jpeg'
import { HomeBg, Homeitemnav,
    HomeContainer, Imgitemnav, } from './PresentationHomeElements';
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    import { Carousel } from 'react-responsive-carousel';


const PresentationHome = () => {
  
    return (
        <HomeContainer id="home">
          {/* <HomeBg>
                <Homeitemnav ><Imgitemnav src={imgcontent}/></Homeitemnav>
          </HomeBg>*/}
             <div style={{ width: '50%' }}>
                <Carousel autoPlay infiniteLoop transitionTime={1000} >
                    <Homeitemnav ><Imgitemnav src={imgcontent}/></Homeitemnav>
                    <Homeitemnav ><Imgitemnav src={imgadop}/></Homeitemnav>
                    <Homeitemnav ><Imgitemnav src={imgabat}/></Homeitemnav>
                </Carousel>
            </div>
        </HomeContainer>
    )
}

export default PresentationHome
