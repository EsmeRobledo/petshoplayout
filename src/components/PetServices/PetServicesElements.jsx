import styled from 'styled-components'

export const ServicesContainer = styled.div`
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-items: center;
        background: #D0E0E3;

        @media screen and (max-width: 768px){
            height: 1300px;
        }

        @media screen and (max-width: 480px){
            height: 1100px;
        }
`  
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 10px auto;
    display: grid;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 16px;
    padding: 5px 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
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
       