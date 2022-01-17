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
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        padding: 0;
    }
`

export const Form = styled.form`
  background: #D0E0E3;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px){
      padding: 20px 5px;
  }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #5B8FBF;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #5B8FBF;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
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
`
