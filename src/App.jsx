import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import NewProduct from './NewProduct';
import { Receipts } from './Receipts';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar itemCount={cartItems.length} />

      <Box padding="1rem">
        <Container maxW="container.xl">
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
            <Route path="/receipts">
              <Receipts />
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
