import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Receipts } from './Receipts';
import { ReceiptDetail } from './ReceiptDetail';
import CreateReceipt from './CreateReceipt';
import { Products } from './Products';
import CreateProduct from './CreateProduct';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
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
import { PrivateRoutes } from './components/PrivateRoutes';

const linkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Create Product', icon: <FiDisc />, url: '/products/create' },
  { name: 'Products', icon: <FiTv />, url: '/products' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useAuthContext();

  return (
    <div className="flex h-full flex-col">
      <Navbar
        className="md:hidden"
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
                <div className="flex items-center">
                  <div className="mr-2">{item.icon}</div> {item.name}
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
          <Button fullWidth startContent={<FiLogOut />}>
            Sign out
          </Button>
        </NavbarMenu>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
      </Navbar>
      <div className="h-full">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes isAuthenticated={!!token} />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/receipts/create" element={<CreateReceipt />} />
            <Route path="/receipts/:id" element={<ReceiptDetail />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
