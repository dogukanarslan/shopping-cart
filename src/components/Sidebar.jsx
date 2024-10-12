import { FiFile, FiPlusSquare, FiDisc } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LinkItems = [
  { name: 'CreateReceipt', icon: <FiPlusSquare />, url: '/receipts/create' },
  { name: 'Receipts', icon: <FiFile />, url: '/receipts' },
  { name: 'Products', icon: <FiDisc />, url: '/products' },
];

const Sidebar = () => {
  return (
    <div className="fixed h-full w-56 border-r-1 p-6">
      <h1 className="font-bold text-2xl mb-4">Receipts</h1>
      <div className="space-y-2">
        {LinkItems.map((link) => (
          <div key={link.name}>
            <Link to={link.url}>
              <div className="flex items-center">
                <div className="mr-2">{link.icon}</div> {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
