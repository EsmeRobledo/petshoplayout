import styled from 'styled-components';


export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 0;
    overflow: hidden;
    background: white;
    @media screen and (max-width: 400px){
      height: 2100px;
     }
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 700px;

    @media screen and (max-width: 400px){
      max-height: 750px;
      margin-left: 0;
      flex-direction: row;
  }
  @media screen and (max-width: 768px){
    margin-left: 40px;
   }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px){
      height: 650px;
      flex-direction: column;
      max-width: 400px;
    }
  
`

export const Form = styled.form`
  background: #99cccc;
  max-width: 500px;
  height: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
  @media screen and (max-width: 400px){
    padding: 5px;
    max-width: 400px;
    height: 400px;
  }
 
`
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 400px){
    height: auto;
    flex-direction: row;
    max-width: 400px;
  }
 `

export const Divformwrap = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  
  @media screen and (max-width: 400px){
    flex-direction: column;
    height: 1100px;
    max-width: 400px;
   }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #194853;
  @media screen and (max-width: 400px){
    font-size: 12px;
   }
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    @media screen and (max-width: 400px){
      padding: 8px 8px;
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
