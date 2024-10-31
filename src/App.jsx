import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';
import { Products } from './Products';
import Sidebar from './components/Sidebar';
import CreateProduct from './CreateProduct';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { FiFile, FiPlusSquare, FiDisc, FiHome, FiTv } from 'react-icons/fi';
import { useState } from 'react';

const linkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Create Product', icon: <FiDisc />, url: '/products/create' },
  { name: 'Products', icon: <FiTv />, url: '/products' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-full">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        disableAnimation
        maxWidth="full"
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle />
          <NavbarBrand>Receipts</NavbarBrand>
        </NavbarContent>
        <NavbarMenu>
          {linkItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link to={item.url} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="h-full p-4">
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
          <Route path="/products/create">
            <CreateProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
