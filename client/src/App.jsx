import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Layout from "./components/CrossApp/Layout";
import About from "./pages/About/About";
import Inspiration from "./pages/Inspiration/Inspiration";
import Renovation from "./pages/Renovation/Renovation";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import Jobs from "./pages/Jobs/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/inspiration",
        element: <Inspiration />,
      },
      {
        path: "/renovation",
        element: <Renovation />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="font-raleway">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
