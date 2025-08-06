const ProductItem = ({ product,isGridView }) => {
  return (
    <div 
    className={`bg-white dark:bg-gray-800 shadow-md overflow-hidden  hover:shadow-lg cursor-pointer rounded-lg ${isGridView? "": "flex"}`}>
      <div  className={`overflow-hidden ${
          isGridView ? "aspect-square" : "w-1/3"
        }`} >
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover hover:scale-110  scale-105 transition-transform ease-in-out duration-300"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-blue-500 font-semibold text-lg md:text-xl">
          ${product.price}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 ">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
