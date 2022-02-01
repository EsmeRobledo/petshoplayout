import axios from "axios";

const URL_ROOT = `${process.env.REACT_APP_API}/product`;
const URL_LOCAL =`${process.env.REACT_APP_API_LOCAL}/product`

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
       console.log(formData);
     const res = await axios.post(`${URL_ROOT}/newproduct`,formData);
     console.log(res.data);
     return res.data
     
    }catch(e){
      console.log('1')
      console.log('2', e.message)
    }
 }


 export  const getProductsList = async () =>{
   try{
      const res = await axios.get(`${URL_ROOT}/productsList`);
      return  res.data.products
      
   }catch(e){
     console.log('1')
     console.log('2', e.message)
   }
}


export  const getProductInfo = async (prodId) =>{
   try{
      const res = await axios.get(`${URL_ROOT}/productInfo`, prodId);
      return  res.data.products
      
   }catch(e){
     console.log('1')
     console.log('2', e.message)
   }
}

 
   

   





 