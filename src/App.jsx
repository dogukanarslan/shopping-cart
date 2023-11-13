import Navbar from "./Navbar";
import Home from "./Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import NewProduct from "./NewProduct";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />

      <Box padding="1rem">
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
      </Box>
    </Router>
  );
}

export default App;
