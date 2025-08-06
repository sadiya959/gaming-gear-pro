const ProductItem = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-blue-400 font-bold">${product.price}</p>
        <p className="text-sm text-slate-600 mt-1">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
