import ProductItem from "./ProductItem";
import { products } from "../constants/products";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-12">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
