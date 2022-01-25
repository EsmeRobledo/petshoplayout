import styled from 'styled-components'



export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
`;

export const HomeBg = styled.div`
    display: flex;
    justify-content: center;

   
`;


export const Homeitemnav = styled.div`
   flex-flow: column;
   padding: 60px 30px 40px;
   
   justify-content: center;
`

export const Imgitemnav = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Homeitemcontents = styled.div`
    grid-column: 3 ;
    grid-row: 2 ;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-column: 2;
        grid-row: 3 ;
    }
    @media screen and (max-width: 480px){
        grid-column: 2;
        grid-row: 3 ;
    }    
`
export const Homeitem2 = styled.div`
    grid-column: 3 ;
    grid-row: 3 ;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-column: 1;
        grid-row: 3 ;
    }
    @media screen and (max-width: 480px){
        grid-column: 1;
        grid-row: 3 ;
    }    
`

export const ImgContent = styled.img`
    width: 100%;
    height: auto;
        
`

export const Homeitemaside = styled.div`
    grid-column: 1 ;
    grid-row: 3 ;

    @media screen and (max-width: 768px){
        grid-column: 2;
        grid-row: 4 ;
    }
    @media screen and (max-width: 480px){
        grid-column: 2;
        grid-row: 4 ;
    }    
`
export const Homeitem = styled.div`
    grid-column: 2 ;
    grid-row: 3 ;
    @media screen and (max-width: 768px){
        grid-column: 1;
        grid-row: 4 ;
    }
    @media screen and (max-width: 480px){
        grid-column: 1;
        grid-row: 4 ;
    }    
`
export const ImgItem = styled.img`
    width: 100%;
    height: auto;
       
`
export const Homecontent = styled.div`
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;











