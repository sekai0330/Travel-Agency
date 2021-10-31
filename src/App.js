import Loader from 'react-loader-spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AuthProvider from './AuthContext/AuthProvider';
import Destination from './Component/Destination/Destination';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute';
import MyBooking from './Component/MyBooking/MyBooking';
import Order from './Component/Order/Order';
import Packages from './Component/Packages/Packages';
import usePackages from './Hooks/usePackages';
import Contact from './Component/Contact/Contact';
import AllBooking from './Component/AllBooking/AllBooking';

function App() {
  const { packages } = usePackages();
  if (!packages.length) {
    return (<div className="text-center mt-5">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>)
  }
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <Route exact path="/allbooking">
              <AllBooking />
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <Route exact path="/destination">
              <Destination />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Order></Order>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
