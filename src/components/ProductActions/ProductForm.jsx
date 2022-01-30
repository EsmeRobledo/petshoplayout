import React, { useState } from 'react'
import {ProductFormContainer, ProductFormWrapper, ProductFormwrapper, Form, FormLabel, FormInput, BtnForm, ProductList} from './ProductFormElements'

function ProductForm() {
const [product, setProduct] = useState('')
const handleOnSubmit = (event) =>{
    event.preventDefault()
    const fromData = new FormData(event.target)
}
    return(
        <>
        <ProductFormContainer>
            <ProductFormWrapper>
                <ProductFormwrapper>
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
                </ProductFormwrapper>
            </ProductFormWrapper>
            <ProductList>
                
            </ProductList>
        </ProductFormContainer>
        </>
    )
}

export default ProductForm;