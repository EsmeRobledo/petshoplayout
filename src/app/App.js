import { UserProvider } from "../context/UserContext";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import Layout from "../components/Layout/Layout";
import RoutesComponent from "../routes/Routes";
import Home from "../components/Home/Home"


function App() {
  return (
   <UserProvider>
     <PayPalScriptProvider>
       <Layout>
         <RoutesComponent />
       </Layout>
     </PayPalScriptProvider>
   </UserProvider>
  );
}

export default App;
