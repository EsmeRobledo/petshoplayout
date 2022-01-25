import styled from "styled-components"


export const ProductFormContainer = styled.div`
`
export const ProductFormWrapper = styled.div`
`
export const ProductForm = styled.div`

`
export const Form = styled.form`

` 

FormLabel>Product Name:</FormLabel>
                    <FormInput name='productName' type='text'/>
                    <FormLabel>Description:</FormLabel>
                    <FormInput name='description' type='text'/>
                    <FormLabel>Price:</FormLabel>
                    <FormInput name='price' type='price'/>
                    <FormLabel>Quantity:</FormLabel>
                    <FormInput name='qty' type='qty'/>
                    <FormLabel>Category:</FormLabel>
                    <FormInput name='category' type='text'/>
                    <FormLabel>type:</FormLabel>
                    <FormInput name='type' type='text'/>
                    <FormLabel>Image:</FormLabel>
                    <FormInput name='img' type='file'/>
                    <BtnForm 