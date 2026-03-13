// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalog from "./pages/Catalog";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Product from "./pages/Product"; 
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy"; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} /> 
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy" element={<Privacy />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;