import styled from "styled-components";


export const ProductFormContainer = styled.div`
    
`
export const ProductFormWrapper = styled.div`
        height: 100%;
        max-width: 350px;
        width: 200px
        display: flex;
        flex-direction: column;
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
export const ProductWrapper = styled.div`
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
export const Form = styled.form`
        background: #99cccc;
        max-width: 700px;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px
        column-gap: 20px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and (max-width: 400px){
        max-height: 1100px;
        max-width: 400px;
        }
` 

export const FormLabel = styled.label`
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #0C4A5C;
`
export const FormInput  = styled.input`
  padding: 5px 5px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;

`
export const WrapperBtn = styled.div`
    display: flex;
    align-items: center;
`
export const BtnForm = styled.button`
  background: #5B8FBF;
  padding: 20px 40px;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 20 px;
  margin-top: 5px;
  float: right;
  gap: 10px;
  cursor: pointer;

  
    :hover {
    background-color: #85AFBB;
    }
`

export const ProductList = styled.div`

    display: flex;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    flex-direction: column;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`