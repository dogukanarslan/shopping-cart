import { Button, Listbox, ListboxItem } from '@nextui-org/react';
import {
  FiDisc,
  FiFile,
  FiHome,
  FiLogOut,
  FiPlusSquare,
  FiTv,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Create Product', icon: <FiDisc />, url: '/products/create' },
  { name: 'Products', icon: <FiTv />, url: '/products' },
];

const Sidebar = () => {
  return (
    <div className="fixed hidden h-full w-56 border-r-1 p-6 md:block">
      <Listbox variant="faded" aria-label="Sidebar" label="hi" title="hi">
        {LinkItems.map((link) => (
          <ListboxItem key={link.name} href={link.url} textValue="hi">
            <div className="flex items-center">
              <div className="mr-2">{link.icon}</div> {link.name}
            </div>
          </ListboxItem>
        ))}
      </Listbox>
      <Button fullWidth startContent={<FiLogOut />}>Sign out</Button>
    </div>
  );
};

export default Sidebar;
