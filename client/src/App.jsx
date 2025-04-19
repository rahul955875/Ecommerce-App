import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { Provider } from "react-redux";
import store from "./redux_store/store";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import Auth from "./components/Auth";
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
    element : <Auth/>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: "/auth/Register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default App;
