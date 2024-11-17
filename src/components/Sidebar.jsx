import { Button, Link, Listbox, ListboxItem } from '@nextui-org/react';
import {
  FiDisc,
  FiFile,
  FiHome,
  FiLogOut,
  FiPlusSquare,
  FiShoppingCart,
  FiTv,
} from 'react-icons/fi';
import { useAuthContext } from '../contexts/AuthContext';

const LinkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Create Product', icon: <FiDisc />, url: '/products/create' },
  { name: 'Products', icon: <FiTv />, url: '/products' },
];

const Sidebar = () => {
  const { username, signOut } = useAuthContext();
  return (
    <div className="fixed hidden h-full w-56 border-r-1 p-6 md:flex md:flex-col md:justify-between">
      <div>
        <Link to="/" className="text-color-black">
          <div className="my-4 flex items-center gap-2">
            <FiShoppingCart size={24} />
            <p className="font-bold uppercase">Receipts</p>
          </div>
        </Link>
        <Listbox variant="faded" aria-label="Sidebar" label="hi" title="hi">
          {LinkItems.map((link) => (
            <ListboxItem key={link.name} href={link.url} textValue="hi">
              <div className="flex items-center">
                <div className="mr-2">{link.icon}</div> {link.name}
              </div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>
      <div>
        <h4 className="my-2 text-center">{username}</h4>
        <Button fullWidth startContent={<FiLogOut />} onClick={signOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
