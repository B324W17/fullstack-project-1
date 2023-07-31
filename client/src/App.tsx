import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/navbar/NavBar";
import ProductDetail from "./components/products/ProductDetail";
import UserProfile from "./components/users/UserProfile";
import CartList from "./components/cart/CartList";
import OrderList from "./components/orders/OrderList";

import "./App.css";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import ProductCategory from "./components/products/ProductCategory";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/category/:category" element={<ProductCategory />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
