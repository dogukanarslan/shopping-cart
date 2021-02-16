import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Shopping Cart</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/product/create">Create Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
