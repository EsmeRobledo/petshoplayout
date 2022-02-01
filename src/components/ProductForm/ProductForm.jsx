import React, {useState, useEffect}  from "react";
import {ProductFormContainer, ProductFormWrapper,WrapperBtn, Table, Td, Th, ProductWrapper, Form, FormLabel, FormInput, ProductList, BtnForm} from "./ProductFormElements"
import {getProductsList, newProduct} from '../../Services'

const ProductForm = () =>{
    const [edit, setEdit] = useState()
    const [products, setProducts] = useState([])
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        qty: '',
        category: '',
        type: '',
        img: '',
    });
    
    const getProducts = async () =>{
        const productsList = await getProductsList();
        setProducts(productsList);
        
    }

    const save = async (e) =>{
       const data = new FormData(e.target);
       const resp = await newProduct(data);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        save(e);
        getProducts();
    }

    const handleEditClick = (event) => {
        event.preventDefault();
        setEdit(true)
    }

    useEffect (() =>{
        getProducts()
    }, [])
    

    return(
        <>
        <ProductFormContainer>
            <ProductFormWrapper>
                <ProductWrapper>
                   <Form onSubmit={onSubmit} >
                   <FormLabel>Product Name:</FormLabel>
                    <FormInput name='productName'  required type='text'/>
                    <FormLabel>Description:</FormLabel>
                    <FormInput name='description' required type='text'/>
                    <FormLabel>Price:</FormLabel>
                    <FormInput name='price'  required type='price'/>
                    <FormLabel>Quantity:</FormLabel>
                    <FormInput name='qty'  required type='qty'/>
                    <FormLabel>Category:</FormLabel>
                    <FormInput name='category'  required type='text'/>
                    <FormLabel>type:</FormLabel>
                    <FormInput name='type'  required type='text'/>
                    <FormLabel>Image:</FormLabel>
                    <input name='img' type='file'/>
                    <WrapperBtn>
                        <BtnForm type='submit'>Add Product</BtnForm>
                    </WrapperBtn>
                   </Form>
                </ProductWrapper>
            </ProductFormWrapper>
            <ProductList>
                <Table>
                    <thead>
                    <tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Price</Th>
                        <Th>Qty</Th>
                        <Th>type</Th>
                        <Th>Category</Th> 
                        <Th>Image</Th>
                        <Th>Actions</Th>   
                    </tr>
                    </thead>
                    <tbody>
                        {console.log(products)}
                        {products.map((product) =>(
                             <tr key={product._id}>
                                 <Td>{product.productName}</Td>
                                 <Td>{product.description}</Td>
                                 <Td>{product.price}</Td>
                                 <Td>{product.qty}</Td>
                                 <Td>{product.type}</Td>
                                 <Td>{product.category}</Td>
                                 <Td></Td>
                                 <Td><button type="button" onClick={(event) => handleEditClick(event)}>Edit</button></Td>
                             </tr>
                        ))}
                    </tbody>
                </Table>
            </ProductList>
        </ProductFormContainer>
        </>
    )

}


export default ProductForm;