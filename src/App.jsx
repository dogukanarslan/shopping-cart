import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';
import { Products } from './Products';
import CreateProduct from './CreateProduct';
import Sidebar from './components/Sidebar';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import {
  FiDisc,
  FiFile,
  FiHome,
  FiLogOut,
  FiPlusSquare,
  FiShoppingCart,
  FiTv,
} from 'react-icons/fi';
import { useState } from 'react';
import { useAuthContext } from './contexts/AuthContext';

const linkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Create Product', icon: <FiDisc />, url: '/products/create' },
  { name: 'Products', icon: <FiTv />, url: '/products' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username } = useAuthContext();

  return (
    <div className="h-full">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        disableAnimation
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        isBordered
      >
        <NavbarContent>
          <NavbarBrand className="items-center gap-3">
            <FiShoppingCart size={24} />
            <p className="font-bold uppercase">Receipts</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarMenu>
          {linkItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link to={item.url} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <Button fullWidth startContent={<FiLogOut />}>
            Sign out
          </Button>
        </NavbarMenu>
        {username && (
          <NavbarContent justify="center">
            <NavbarItem>{username}</NavbarItem>
          </NavbarContent>
        )}
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
      </Navbar>
      <Sidebar />
      <div className="h-full p-4 md:ml-56">
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
