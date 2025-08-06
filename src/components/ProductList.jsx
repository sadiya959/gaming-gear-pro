import ProductItem from "./ProductItem";
import { products } from "../constants/products";
import { useContext } from "react";
import { ViewContext } from "../contexts/ViewContext";

const ProductList = () => {
  const { view } = useContext(ViewContext);

  const containerView =
    view === "grid"
      ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      : "flex flex-col gap-6";

  return (
    <ul className={containerView}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
