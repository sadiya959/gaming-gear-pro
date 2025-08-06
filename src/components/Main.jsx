import ProductList from "./ProductList";

const Main = () => {
  return (
    <main className="max-w-7xl text-gray-800 dark:text-gray-50 mx-auto px-4">
      {/* product header */}
      <div className="text-center mt-6">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">
          Premium Gaming Equipment
        </h1>
        <p className="md:text-xl text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Discover our collection of high-performance gaming gear designed for
          professionals and enthusiasts
        </p>
      </div>
      {/* product list  */}
      <ProductList />
    </main>
  );
};

export default Main;
