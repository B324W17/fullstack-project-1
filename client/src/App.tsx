import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/navbar/NavBar";
import ProductDetail from "./components/products/ProductDetail";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./components/users/UserProfile";
import CartList from "./components/cart/CartList";
import OrderList from "./components/orders/OrderList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
