import React from 'react'
import PresentationHome from '../PresentationHome/PresentationHome'
import PetServices from '../PetServices/PetServices'
import PetShopList from './../PetShopList/PetShopList';



const Home = () => {
 return (
        <>
         <PresentationHome />
          <PetServices />
          <PetShopList />
        </>
    )
}

export default Home;