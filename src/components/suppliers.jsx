import React from 'react';
import { Link } from 'react-router-dom';
import { suppliers } from '../data/suppliers'; 
function Suppliers() {
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
      <h1>Suppliers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td><Link to={`/urun/${supplier.id}`}>{supplier.name}</Link></td>
              <td>{supplier.unitPrice}</td>
              <td>{supplier.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;
