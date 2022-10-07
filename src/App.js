import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Shop from "./components/header/shop/Shop";
import About from "./components/pages/about/About";
import Inventory from "./components/pages/inventory/Inventory";
import Login from "./components/pages/login/Login";
import Order from "./components/pages/order/Order";
import Reviews from "./components/pages/reviews/Reviews";
import Main from "./layout/Main";
import productsAndCardLoaders from "./loaders/productsAndCardLoaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "/order",
          loader: productsAndCardLoaders,
          element: <Order />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
