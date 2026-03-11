import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Collections from "./pages/Collections";
import About from "./pages/About";
// import Contacts from "./pages/Contacts";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contacts" element={<Contacts />} />   */}

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;