import styled from 'styled-components'

export const ServicesContainer = styled.div`
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-items: center;
        background: #D0E0E3;

        @media screen and (max-width: 400px){
            height: 1000px;
        } 
        @media screen and (max-width: 768px){
            height: 800px;
        } 
  
`  
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 10px auto;
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 16px;
    padding: 5px 50px;

   @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
    @media screen and (max-width: 400px){
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        grid-gap: 5px;
        padding: 5px ;
    }
`
export const ServicesCard = styled.div`
    background: #DFEBED;
    display: flex;
    margin: 50px auto;
    flex-direction: column;
    gap: 10px;
    border-radius: 2em;
    align-items: center;
    max-height: 340px;
    padding: 30px;

    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        max-height: 240px;
        padding: 10px;
    }
    @media screen and (max-width: 400px){
        max-height: 240px;
        padding: 10px;
        margin: 10px 0;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #759EC2;
`
       