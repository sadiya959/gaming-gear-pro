import { useContext } from "react";
import { ViewContext } from "../contexts/ViewContext";

const ProductItem = ({ product }) => {
  const { view } = useContext(ViewContext);
  return (
    <li
      className={`cursor-pointer rounded-lg bg-white shadow-md hover:shadow-lg dark:bg-gray-800 ${view !== "grid" && "flex"}`}
    >
      <div
        className={`aspect-square overflow-hidden rounded-t-lg ${view !== "grid" ? "w-1/3" : ""}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-top hover:scale-105"
        />
      </div>

      <div className={`${view !== "grid" ? "w-2/3" : ""} space-y-2 p-6`}>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-lg font-semibold text-blue-500 md:text-xl">
          ${product.price}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {product.description}
        </p>
      </div>
    </li>
  );
};

export default ProductItem;
