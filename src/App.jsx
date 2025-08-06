import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
