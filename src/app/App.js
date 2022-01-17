import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router';
import Home from '../components/Home/Home'
import Help from '../components/Help/Help'
import Signup from '../components/Signup/Signup'
import Signin from '../components/Signin/Signin'

function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
       <Route path="/" component={Home} exact />
      <Route path="/help" component={Help} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/signin" component={Signin} exact />
     </Switch>
    </Router>
    </div>
  );
}

export default App;
