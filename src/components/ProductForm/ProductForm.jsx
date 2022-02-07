import React, {useState, useEffect}  from "react";
import {ProductFormContainer, ProductFormWrapper,WrapperBtn, Table, Td, Th, ProductWrapper, Form, FormLabel, FormInput, ProductList, BtnForm} from "./ProductFormElements"
import {getProductsList, newProduct, getProductInfo} from '../../Services'

const ProductForm = () =>{
    const [edit, setEdit] = useState()
    const [products, setProducts] = useState([])
    const [productId, setroductId] = useState('')
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

    const editProduct = async (formData) =>{
        const resp = await getProductInfo(formData, productId);
        alert(" Product modified ")
        setEdit(false)
        setFormData(
            {
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            nopersonas: '' ,
            }
        )
     }

    const onSubmit = (e) => {
        e.preventDefault();
        if(edit){
            editProduct(formData)
        }else{
            save(e);
        }
        
        getProducts();
    }

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setEdit(true)
        setroductId(product._id)
        setFormData({
            productName : product.productName,
            description : product.description,
            price : product.price,
            qty : product.qty,
            category : product.category,
            type : product.type,
            img : product.img,
        }
        )
    }

    useEffect (() =>{
        getProducts()
    }, [])
    
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
        <ProductFormContainer>
            <ProductFormWrapper>
                <ProductWrapper>
                   <Form onSubmit={onSubmit} >
                   <FormLabel>Product Name:</FormLabel>
                    <FormInput name='productName' value={formData.productName || ""}  required type='text' onChange={onChange}/>
                    <FormLabel>Description:</FormLabel>
                    <FormInput name='description' value={formData.description || ""}  required type='text' onChange={onChange}/>
                    <FormLabel>Price:</FormLabel>
                    <FormInput name='price' value={formData.price || ""}   required type='price' onChange={onChange}/>
                    <FormLabel>Quantity:</FormLabel>
                    <FormInput name='qty' value={formData.qty || ""}  required type='qty' onChange={onChange}/>
                    <FormLabel>Category:</FormLabel>
                    <FormInput name='category' value={formData.category || "" }   required type='text' onChange={onChange}/>
                    <FormLabel>type:</FormLabel>
                    <FormInput name='type' value={formData.type || ""}  required type='text' onChange={onChange}/>
                    <FormLabel>Image:</FormLabel>
                    <input name='img'  type='file' />
                    <WrapperBtn>
                       {edit ? null : <BtnForm type='submit'>Add Product</BtnForm> }
                       {edit ? <BtnForm type='submit'>Save</BtnForm> : null } 
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
                        <Th></Th>
                        <Th>Actions</Th>   
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((product) =>(
                             <tr key={product._id}>
                                 <Td>{product.productName}</Td>
                                 <Td>{product.description}</Td>
                                 <Td>{product.price}</Td>
                                 <Td>{product.qty}</Td>
                                 <Td>{product.type}</Td>
                                 <Td>{product.category}</Td>
                                 <Td></Td>
                                 <Td><button type="button" onClick={(event) => handleEditClick(event, product)}>Edit</button></Td>
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