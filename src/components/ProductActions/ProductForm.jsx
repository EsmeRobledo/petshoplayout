import React from 'react'
import { FormLabel } from 'react-bootstrap'

function ProductForm() {

const handleOnSubmit = (event) =>{
    event.preventDefault()
    const fromData = new FormData(event.target)
}
    return(
        <>
        <ProductFormContainer>
            <ProductFormWrapper>
                <ProductForm>
                   <Form onSubmit={handleOnSubmit}>
                   <FormLabel>Product Name:</FormLabel>
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
                    <BtnForm type='submit'>Add Product</BtnForm>
                   </Form>
                </ProductForm>
            </ProductFormWrapper>
            <ProductList>
                
            </ProductList>
        </ProductFormContainer>
        </>
    )
}