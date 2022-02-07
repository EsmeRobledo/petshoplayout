import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Helpcontainer = styled.div`
    background: #D0E0E3;
    height: 550px;
    bottom: 30px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    @media screen and (max-width: 400px){
        height: 2200px; 
    }

  `

export const Wrapperheadear = styled.div`
    background: #D0E0E3;
    text-align: center;

`
export const HelpH1 = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom: 16px;
    color: #5B8FBF;

    @media screen and (max-width: 400px){
        font-size: 18px; 
    }
`

export const HelpWrapper = styled.div`
    background: #D0E0E3;
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    background: #D0E0E3;
    @media screen and (max-width: 400px){
        justify-content: left; 
    }
`


export const WrapperOptions = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    @media screen and (max-width: 820px){
        flex-direction: column;
        justify-content: left;
    }
    
    
`

export const HelpDivOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
   
    @media screen and (max-width: 400px){
        margin: 0;
        width: 10px;
        padding: 10px;
        justify-content: left;
    }
`

export const HelpOptH1 = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    color: #5B8FBF;

    @media screen and (max-width: 400px){
        font-size: 15px; 
    }
`

export const HelpLink = styled(Link)`
    color: #1F7381;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;

    &:hover{
        color: blue;
        transition: 0.3s ease-out;
        
    }
    @media screen and (max-width: 400px){
        font-size: 12px; 
    }
`

export const Icon = styled(Link)`
  color: #5B8FBF;
  cursor: pointer;
  font-size: 24px;
  text-align: right;
  margin-left: 24px;
  margin-top: 10px
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 400px){
    font-size: 12px; 
}
`
