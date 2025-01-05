import { useState } from 'react';
import { Button, Link } from '@nextui-org/react';
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
  const [selectedTab, setSelectedTab] = useState('Home');
  const { token, username, signOut } = useAuthContext();
  return (
    <div className="fixed hidden h-full w-56 border-r-1 p-6 md:flex md:flex-col md:justify-between">
      <div>
        <Link href="/" className="text-color-black">
          <div className="flex items-center gap-2">
            <FiShoppingCart size={24} />
            <p className="font-bold uppercase">Receipts</p>
          </div>
        </Link>
        <hr className='my-4'/>
        <div>
          {LinkItems.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              onPress={() => setSelectedTab(link.name)}
              className={`w-full rounded px-4 py-2 text-inherit ${link.name === selectedTab ? 'bg-black text-white' : ''}`}
            >
              <div className="flex items-center">
                <div className="mr-2">{link.icon}</div> {link.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {!token ? (
          <div className="flex flex-col gap-2">
            <Button as={Link} href="/signin">
              Sign in
            </Button>
            <Button as={Link} href="/signup">
              Sign up
            </Button>
          </div>
        ) : (
          <>
            <h4 className="my-2 text-center">{username}</h4>
            <Button fullWidth startContent={<FiLogOut />} onPress={signOut}>
              Sign out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
