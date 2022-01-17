import styled from 'styled-components'



export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;
    background: #D0E0E3;
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
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 300px 300px 300px;
   
    box-sizing: border-box;
  
`;

export const Homeitemheader = styled.div`
    grid-column: 1 / span 3;
    align-items: center;
    text-align: center;
    font-size: 48px;
    color: #557272;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`
export const Homeitemnav = styled.div`
    grid-column: 1 / span 2;
    grid-row: 2 ;
    align-items: center;        
`
export const Imgitemnav = styled.img`
    width: 100%;
    height: auto;
        }
        @supports(object-fit: cover){
        .box img{
        height: 100%;
        object-fit: cover;
        object-position: center center;
        }
`
export const Homeitemcontents = styled.div`
    grid-column: 3 ;
    grid-row: 2 ;
    align-items: center;
`
export const Homeitem2 = styled.div`
    grid-column: 3 ;
    grid-row: 3 ;
    align-items: center;
`

export const ImgContent = styled.img`
    width: 100%;
    height: auto;
        
`

export const Homeitemaside = styled.div`
    grid-column: 1 ;
    grid-row: 3 ;
`
export const Homeitem = styled.div`
    grid-column: 2 ;
    grid-row: 3 ;
`
export const ImgItem = styled.img`
    width: 100%;
    height: auto;
       
`
export const Homefooter = styled.div`
    grid-column: 1 / span 3  ;
    grid-row: 4 ;
    align-items: center;
    text-align: center;
    font-size: 27px;
    color: #557272;
`

export const Homecontent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;









