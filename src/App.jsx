import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';
import { Products } from './Products';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="h-full">
        <Sidebar />
        <div className="ml-56 p-4">
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
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
