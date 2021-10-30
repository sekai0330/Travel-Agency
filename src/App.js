import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AuthProvider from './AuthContext/AuthProvider';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute';
import Order from './Component/Order/Order';

function App() {
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
            <Route exact path="/login">
              <Login></Login>
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
