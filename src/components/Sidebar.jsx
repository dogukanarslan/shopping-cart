import { Listbox, ListboxItem } from '@nextui-org/react';
import { FiFile, FiPlusSquare, FiDisc, FiHome } from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: <FiHome />, url: '/' },
  { name: 'Create Receipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Products', icon: <FiDisc />, url: '/products' },
];

const Sidebar = () => {
  return (
    <div className="fixed h-full w-56 border-r-1 p-6">
      <h1 className="font-bold text-2xl mb-4">Receipts</h1>
      <Listbox variant="faded">
        {LinkItems.map((link) => (
          <ListboxItem key={link.name} href={link.url} textValue="hi">
            <div className="flex items-center">
              <div className="mr-2">{link.icon}</div> {link.name}
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};

export default Sidebar;
