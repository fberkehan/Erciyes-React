import React, { useState } from 'react';
import { suppliers } from '../data/suppliers';

function CriticStock() {
  const [urunler, setUrunler] = useState(suppliers);


  const handleClick = (event) => {
    const id = event.target.id;
    if (id === 'KritikStok') {
      const kritikUrunler = suppliers.filter((urun) => urun.unitsInStock <= 10);
      setUrunler(kritikUrunler);
    } else if (id === 'ucuzUrunler') {
      const ucuzUrunler = suppliers.filter((urun) => urun.unitPrice <= 10);
      setUrunler(ucuzUrunler);
    } else if (id === 'pahaliUrunler') {
      const pahaliUrunler = suppliers.filter((urun) => urun.unitPrice >= 100);
      setUrunler(pahaliUrunler);
    } else if (id === 'hepsiniGoster') {
      setUrunler(suppliers);
    }
  };


  return (
    <div>
      <button id='KritikStok' onClick={handleClick}>Kritik Stok</button>
      <button id='ucuzUrunler' onClick={handleClick}>Ucuz Ürünler</button>
      <button id='pahaliUrunler' onClick={handleClick}>Pahalı Ürünler</button>
      <button id='hepsiniGoster' onClick={handleClick}>Hepsini Göster</button>
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
          {urunler.map((urun) => (
            <tr key={urun.id}>
              <td>{urun.id}</td>
              <td>{urun.name}</td>
              <td>{urun.unitPrice}</td>
              <td>{urun.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default CriticStock;