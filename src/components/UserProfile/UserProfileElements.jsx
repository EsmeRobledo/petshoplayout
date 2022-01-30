import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: white;
`

export const ProfileWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap
    margin-top: 50px;
    margin-left: 50px;
    gap: 50px;
    @media screen and (max-width: 400px){
      margin-left: 5px;
      gap: 5px;
  }
`
export const ProfileContent = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  @media screen and (max-width: 400px){
    max-height: 750px;
    position: fixed;
    flex-direction: row;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: auto;

`
export const ImageProfile = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: auto;

`
export const BtnEdit = styled.button`
background: #5B8FBF;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20 px;
  margin-top: 5px;
  gap: 10px;
  cursor: pointer; 

  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}

`

export const BtnAccept = styled.button`
  background: #5B8FBF;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20 px;
  margin-top: 5px;
  gap: 10px;
  cursor: pointer; 

  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}
`
export const BtnElim = styled.button`
background: #5B8FBF;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20 px;
  margin-top: 5px;
  gap: 10px;
  cursor: pointer; 

  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}

`
export const PersonalInfoContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px){
    max-height: 2100px;
  }

`
export const InfoH2 = styled.h2`
    color: #5B8FBF;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    @media screen and (max-width: 400px){
      font-size: 12px;
      font-weight: 200;
      text-align: left;
    }
`


export const BtnPassword = styled.button`
  background: #5B8FBF;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20 px;
  margin-top: 5px;
  gap: 10px;
  cursor: pointer; 

  @media screen and (max-width: 400px){
    font-size: 16 px;
    margin-top: 0;
    gap: 5px;
}

`        
export const Form = styled.form`
  background: #D0E0E3;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
  @media screen and (max-width: 400px){
    max-height: 1100px;
    max-width: 400px;
  }
`
export const PassWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  margin-top: 30px
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 400px){
    max-height: 2100px;
  }

`

export const FormPass = styled.form`
  background: #D0E0E3;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
  @media screen and (max-width: 400px){
    max-height: 1100px;
    max-width: 400px;
  }
`
export const LabelText = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #3B7F93;
`

export const LabelTextValue = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #163139;`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    @media screen and (max-width: 400px){
      padding: 10px 10px;
      margin-bottom: 12px;
  }
`
                 