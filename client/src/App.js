import './App.css';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import NavBar from './NavBar';

function App() {
  return (
    <div >
  <Router>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/feed" component={Feed} />
    </Switch>
  </Router>
    </div>
  );
}

export default App;
