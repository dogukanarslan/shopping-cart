import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import Navbar from './Navbar';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';

function App() {
  return (
    <Router>
      <Navbar />

      <Box padding="1rem">
        <Container maxW="container.xl">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/receipts/create">
              <CreateReceipt />
            </Route>
            <Route path="/receipts/:id">
              <ReceiptDetail />
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
