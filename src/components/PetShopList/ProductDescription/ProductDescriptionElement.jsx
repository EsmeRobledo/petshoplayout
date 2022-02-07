import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrappArea = styled.div`
    background: white;
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 0;
    overflow: hidden;
`


export const WrappProduct = styled.div`
    background: #DFEBED;
    max-width: 1100px;
    height: auto;
    display: flex;
    margin: 50px auto;
    flex-direction: row;
    gap: 10px;
    border-radius: 2em;
    align-items: center;
    padding: 30px;
`

export const WrappInfo = styled.div`
    width: 550px;
    height: 300px;
    border-radius: 2em;
    align-items: center;
    padding: 30px;
`

export const WrappImage = styled.div`
    width: 550px;
    height: 300px;
    border-radius: 2em;
    display: block;
    align-items: center;
`

export const ProductImg = styled.img`
      width: 60%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

`

export const H2 = styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    color: #7EA5C9;

`

export const PDescrip = styled.p`
    font-weight: 400;
    font-size: 25px;
    color: #7EA5C9;
`

export const BtnBuy = styled(Link)`
  background: #5B8FBF;
  padding: 20px 20px;
  border: 2px;
  border-radius: 4px;
  color: white;
  font-size: 40 px;
  margin-top: 10px;
  gap: 20px;
  cursor: pointer; 
  text-decoration: none;
  justify-content: center;
  text-decoration-line: none

  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}

`

export const GoBack = styled(Link)`
background: #5B8FBF;
  padding: 20px 20px;
  border: 2px;
  border-radius: 4px;
  color: white;
  font-size: 40 px;
  margin-top: 5px;
  gap: 10px;
  cursor: pointer; 
  text-decoration: none;
  justify-content: center;
  text-decoration-line: none
  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}

`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 48%;
    text-align: justify;
    padding: 30px;

`

