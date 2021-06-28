
import './App.css';

import NewUserDetails from './NewUserDetails';
import StudentDetails from './StudentDetails';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import history from './history';
import UserDetails from './UserDetails';


const App=()=>{
  return (
    <div className="App">
      
      <Router  history={history}>
       <Switch>
                            <Route exact path="/" component={StudentDetails}></Route>
                            <Route exact path="/update" component={NewUserDetails}></Route>

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
