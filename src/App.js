import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Shop from "./components/header/shop/Shop";
import About from "./components/pages/about/About";
import Login from "./components/pages/login/Login";
import Order from "./components/pages/order/Order";
import Shipping from "./components/pages/shipping/Shipping";
import SignUp from "./components/pages/SignUp/SignUp";
import Main from "./layout/Main";
import productsAndCardLoaders from "./loaders/productsAndCardLoaders";
import PrivateRoutes from "./routes/PrivateRoutes";

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
          element: (
            <PrivateRoutes>
              {" "}
              <Order />
            </PrivateRoutes>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/shipping",
          element: (
            <PrivateRoutes>
              <Shipping />
            </PrivateRoutes>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
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
