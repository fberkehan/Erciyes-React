import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { suppliers } from '../data/suppliers'; // Doğru yoldan import edildiğinden emin olun

function SupplierDetail() {
  const { id } = useParams();
  const supplier = suppliers.find(supplier => supplier.id === parseInt(id, 10));

  if (!supplier) {
    return <div>Supplier not found</div>;
  }

  return (
    <div>
        <div className="w3-top w3-bar w3-white w3-padding w3-card w3-wide">
      <Link to="/" className="w3-bar-item w3-button">
        Home
      </Link>
      {/* Right-sided navbar links. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
        <Link to="/urunler" className="w3-bar-item w3-button">
          Products
        </Link>
      </div>
    </div>
      <h1>{supplier.name}</h1>
      <p>Supplier ID: {supplier.supplierId}</p>
      <p>Category ID: {supplier.categoryId}</p>
      <p>Quantity Per Unit: {supplier.quantityPerUnit}</p>
      <p>Unit Price: {supplier.unitPrice}</p>
      <p>Units In Stock: {supplier.unitsInStock}</p>
      <p>Units On Order: {supplier.unitsOnOrder}</p>
      <p>Reorder Level: {supplier.reorderLevel}</p>
      <p>Discontinued: {supplier.discontinued ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default SupplierDetail;
