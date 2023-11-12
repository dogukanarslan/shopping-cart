import Navbar from "./Navbar";
import Home from "./Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import NewProduct from "./NewProduct";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
