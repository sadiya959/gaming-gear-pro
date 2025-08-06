import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../contexts/ViewContext";

export default function Header() {
  const { view, setView } = useContext(ViewContext);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            GamingGear Pro
          </h1>
          <nav className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setView("grid")}
                className={`h-[40px] cursor-pointer rounded-md p-2 text-sm ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"}`}
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                onClick={() => setView("list")}
                className={`h-[40px] cursor-pointer rounded-md p-2 text-sm ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"}`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="h-[40px] cursor-pointer rounded-md bg-gray-800 p-2 text-sm text-white hover:bg-gray-700 dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-600"
            >
              {isDark ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
