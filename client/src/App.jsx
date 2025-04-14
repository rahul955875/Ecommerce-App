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
function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </Provider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>NOT found</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/cart", element: <Cart/> }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default App;
