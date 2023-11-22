import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'



function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);


    
    if (!id) {
        return <div>Product not found</div>;
    }


    return (
        <div>
            <button onClick={() => window.history.back()}>Back</button>
            <h1>{product?.name}</h1>
            <p>Supplier ID: {product?.supplierId}</p>
            <p>Category ID: {product?.categoryId}</p>
            <p>Quantity Per Unit: {product?.quantityPerUnit}</p>
            <p>Unit Price: {product?.unitPrice}</p>
            <p>Units In Stock: {product?.unitsInStock}</p>
            <p>Units On Order: {product?.unitsOnOrder}</p>
            <p>Reorder Level: {product?.reorderLevel}</p>
            <p>Discontinued: {product?.discontinued ? 'Yes' : 'No'}</p>

        </div>
    );
}

export default ProductDetails
