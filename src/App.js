import React from "react";

// Import your components
import SiteContent from "./components/siteContent";
import Suppliers from "./components/suppliers";
import SupplierDetail from "./components/supplierDetail"; // Komponenti import edin

// Import CSS file
import "./App.css";

// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SiteContent />} />
        <Route path="/urunler" element={<Suppliers />} />
        <Route path="/urun/:id" element={<SupplierDetail />} />
      </Routes>
  );
}

export default App;
