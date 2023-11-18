import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import NewProduct from "./NewProduct";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar itemCount={cartItems.length} />

      <Box padding="1rem">
        <Switch>
          <Route exact path="/">
            <Home cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/products/create">
            <NewProduct />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
