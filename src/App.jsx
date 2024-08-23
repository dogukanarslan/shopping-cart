import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.100">
        <Sidebar />
        <Box ml="60" p="5">
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
        </Box>
      </Box>
    </Router>
  );
}

export default App;
