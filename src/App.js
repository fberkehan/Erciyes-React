import React from "react";

// Import your components
import SiteContent from "./components/siteContent";
import Suppliers from "./components/suppliers";
import SupplierDetail from "./components/supplierDetail"; // Komponenti import edin
import ReactDivManipulation from "./components/reactDivManipulation";
import ReactNumberManipulation from "./components/reactNumberManipulation";
import CriticStock from "./components/criticStock";
import DivColorize from "./components/divColorize";
import NumberListApp from "./components/numberListApp";
import ProductsNewExam from "./components/productsNewExam";
import ProductDetails from "./components/productDetails";
import Users from "./components/users";

// Import CSS file
import "./App.css";

// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SiteContent />} />
        <Route path="/urunler" element={<Suppliers />} />
        <Route path="/divManupilasyonu" element={<ReactDivManipulation />} />
        <Route path="/numberManipulasyon" element={<ReactNumberManipulation />} />
        <Route path="/divColorize" element={<DivColorize />} />
        <Route path="/numberlister" element={<NumberListApp />} />
        <Route path="/critic" element={<CriticStock />} />
        <Route path="/urun/:id" element={<SupplierDetail />} />
        <Route path="/products" element={<ProductsNewExam />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/users/" element={<Users />} />
      </Routes>
  );
}

export default App;
