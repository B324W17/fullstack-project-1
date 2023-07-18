import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/navbar/NavBar";
import ProductDetail from "./components/products/ProductDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
