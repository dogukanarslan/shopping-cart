import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = ({ cartItems, setCartItems }) => {
  const {
    data: products,
    isLoading,
    error,
    setData,
  } = useFetch("http://localhost:8000/products");

  const addToCart = (product) => {
    if (product.quantity === 0) {
      alert("Out of stock!");
      return;
    }

    const newProducts = products.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });
    const newCartItems = cartItems.some((item) => item.name === product.name)
      ? cartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [
          ...cartItems,
          {
            id: Math.random(),
            name: product.name,
            quantity: 1,
            price: product.price,
          },
        ];

    setCartItems(newCartItems);
    setData(newProducts);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <ProductList
        products={products}
        cartItems={cartItems}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Home;
