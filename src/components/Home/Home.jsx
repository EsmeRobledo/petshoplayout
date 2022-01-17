import React, {useState} from 'react'
import PresentationHome from '../PresentationHome/PresentationHome'
import { Navigation } from '../../routes/Navigation'
import { Sidebar } from '../../routes/Sidebar/Sidebar'
import PetServices from '../PetServices/PetServices'
import PetShopList from './../PetShopList/PetShopList';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }  
  return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navigation toggle={toggle} />  
          <PresentationHome />
          <PetServices />
          <PetShopList />
        </>
    )
}

export default Home;