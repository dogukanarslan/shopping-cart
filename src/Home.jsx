import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
    setData,
  } = useFetch("http://localhost:8000/products");

  const addToCart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        if (product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          alert("Out of stock!");
        }
      }
      return product;
    });
    setData(newProducts);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
