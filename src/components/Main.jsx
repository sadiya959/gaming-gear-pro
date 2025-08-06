import ProductList from "./ProductList";

const Main = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-gray-800 sm:px-6 lg:px-8 dark:text-gray-50">
      {/* product header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          Premium Gaming Equipment
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
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
