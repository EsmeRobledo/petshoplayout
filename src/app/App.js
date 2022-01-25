import { UserProvider } from "../context/UserContext";
import { ProductProvider } from "../context/ProductContext";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import Layout from "../components/Layout/Layout";
import RoutesComponent from "../routes/Routes";




function App() {
  return (
   <UserProvider>
     <ProductProvider>
     <PayPalScriptProvider>
       <Layout>
         <RoutesComponent />
       </Layout>
     </PayPalScriptProvider>
     </ProductProvider>
   </UserProvider>
  );
}

export default App;
