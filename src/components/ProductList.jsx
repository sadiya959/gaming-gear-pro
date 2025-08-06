import ProductItem from "./ProductItem";
import { products } from "../constants/products";
import { useState } from "react";

const ProductList = () => {
    const [isGridView, setIsGridView] = useState(true)


  return (
    <div className="px-4 my-12">
    <div className={` ${isGridView ? "grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 gap-8"} grid items-center justify-center`}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} isGridView={isGridView}/>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
