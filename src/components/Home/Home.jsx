import React from 'react'
import PresentationHome from '../PresentationHome/PresentationHome'
import PetServices from '../PetServices/PetServices'
import PetShopList from '../PetShopList/PetShopList'
import Footer from '../Footer/Footer'



const Home = () => {
 return (
        <>
         <PresentationHome />
          <PetServices />
          <PetShopList />
          <Footer/>
        </>
    )
}

export default Home;