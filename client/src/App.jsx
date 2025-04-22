import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import Auth from "./components/Auth";
import Private from "./Routes/Private";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import AdminPrivate from "./Routes/AdminPrivate";
import AdminDashboard from "./components/AdminDashboard";
import CreateCategory from "./components/CreateCategory";
import CreateProduct from "./components/CreateProduct";
import Users from "./components/Users";
import Order from "./components/Order";
import UserProfile from "./components/UserProfile";
import UpdatedNameProvider from "./hook/UpdatedNameProvider";
import ProductsList from "./components/ProductsList";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Toaster />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page NOT Found</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/Register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <Private />,
    children: [
      { path: "user", element: <Dashboard /> },
      { path: "user/orders", element: <Order /> },
      { path: "user/profile", element: <UserProfile /> },
    ],
  },
  {
    path: "/Dashboard",
    element: <AdminPrivate />,
    children: [
      { path: "admin", element: <AdminDashboard /> },
      {path:"admin/products", element:<ProductsList/>},
      {
        path: "admin/create-category",
        element: (
          <UpdatedNameProvider>
            <CreateCategory />
          </UpdatedNameProvider>
        ),
      },
      { path: "admin/create-product", element: <CreateProduct /> },
      { path: "admin/products/:slug", element: <UpdateProduct /> },
      { path: "admin/users", element: <Users /> },
    ],
  },
]);

export default App;
