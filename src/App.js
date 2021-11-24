import Loader from 'react-loader-spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AuthProvider from './AuthContext/AuthProvider';
import Destination from './Component/Destination/Destination';
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
import AddPackage from './Component/AddPackage/AddPackage';
import NotFound from './Component/NotFound/NotFound';
import Gallary from './Component/Gallary/Gallary';
import About from './Component/About/About';
import Registration from './Component/Registration/Registration';
import Footer from './Component/Footer/Footer';

function App() {
  // Use spinner before loading
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

  // Return App Component with AuthProvider and Router
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
            <Route exact path="/addpackage">
              <AddPackage />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration />
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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/destination">
              <Destination />
            </Route>
            <Route exact path="/gallery">
              <Gallary />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
