import axios from "axios";

const URL_ROOT = `${process.env.REACT_APP_API}/product`;


 export  const getProducts = async (category) =>{
    try{
       const res = await axios.get(`${URL_ROOT}/getproducts/${category}`);
       return  res.data.products
       
    }catch(e){
      console.log('1')
      console.log('2', e.message)
    }
 }

 export const newProduct = async(formData) =>{
    try{
      const res = await axios.post(`${URL_ROOT}/newproduct`,formData);
     return res.message
     
    }catch(e){
      console.log('1')
      console.log('2', e.message)
    }
 }



 
   

   





 