import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products/create">
              <NewProduct />
            </Route>
            <Route path="/products/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
