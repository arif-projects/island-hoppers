import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase/Purchase';
import Login from './components/Login/Login/Login';
import Navber from './components/Navber/Navber';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices.js/ManageServices';
import MyOrders from './components/MyOders/MyOrders';
import AllOrders from './components/AllOrders/AllOrders';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      
      <AuthProvider>

      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path = "/">
           <Home></Home>
          </Route>

          <Route path = "/home">
           <Home></Home>
          </Route>

          <Route path = "/login">
            <Login></Login>
          </Route>

          <PrivateRoute path = "/purchese/:serviceId">
            <Purchase></Purchase>
          </PrivateRoute>

          <Route path = "/addService">
            <AddService></AddService>
          </Route>

          <Route path ="/manageServices">
            <ManageServices></ManageServices>
          </Route>

          <Route path = "/allOrders">
            <AllOrders></AllOrders>
          </Route>

          <Route path = "/orders">
            <MyOrders></MyOrders>
          </Route>

          <Route path = "*">
             <NotFound></NotFound>
          </Route>

        </Switch>
         <Footer></Footer>
      </Router>

      </AuthProvider>
    
    </div>
  );
}

export default App;
