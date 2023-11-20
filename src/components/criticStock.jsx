import React from 'react'
import { suppliers } from '../data/suppliers';



let urunler = [];

suppliers.map(supplier => (
    urunler.push(supplier.name)
));




function kritikleriGoster() {
    const kritikStok = document.getElementById('KritikStok');
}

function criticStock() {
  return (
    <div>

<h2>Filtrele</h2>
<button onClick={kritikleriGoster} id='KritikStok'>Kritik Stok</button>
<button id='ucuzUrunler'>Ucuz Ürünler</button>
<button id='pahaliUrunler'>Pahalı Ürünler</button>
<button id='hepsiniGoster'>Hepsini Göster</button>

        
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
              <td>{supplier.name}</td>
              <td>{supplier.unitPrice}</td>
              <td>{supplier.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default criticStock
