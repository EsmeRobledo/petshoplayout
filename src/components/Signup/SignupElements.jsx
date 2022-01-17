import styled from 'styled-components';


export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: gray;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px){
      max-height: 750px;
      position: fixed;
  }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
`

export const Form = styled.form`
  background: #D0E0E3;
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

 
`
export const DivWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  @media screen and (max-width: 400px){
    flex-direction: column;
  }
 `

export const Divformwrap = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px){
    max-width: 350px;
  }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #5B8FBF;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    @media screen and (max-width: 400px){
      font-size: 15px;
      font-weight: 200;
    }
`
export const FormH2 = styled.h2`
    margin-bottom: 10px;
    color: #5B8FBF;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    @media screen and (max-width: 400px){
      font-size: 12px;
      font-weight: 200;
      text-align: left;
    }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #194853;
`

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

export const FormButtom = styled.button`
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
