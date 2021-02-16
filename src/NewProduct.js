const NewProduct = () => {
  return (
    <div className="product-new">
      <h2>New Product</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Price</label>
        <input type="number" />
        <label>Quantity</label>
        <input type="number" />
        <label>Description</label>
        <textarea></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
