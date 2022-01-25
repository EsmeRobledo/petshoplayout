const reducer = (globalState,action) =>{

    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...globalState,
                products: action.playload,
                product:[{
                    id_:"",
                    productName: "",
                    description:"",
                    price:"",
                    qty:"",
                    category:"",
                    type:"",
                    img:""
                }]
            }
            case "GET_PRODUCT":
        return{
            ...globalState,
            product :[action.playload]
        }
        default:
            return globalState
    }
    
}

export default reducer;