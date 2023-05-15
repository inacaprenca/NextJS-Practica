"use client";
import React, { useState, useEffect } from 'react';
import { query } from '@/lib/db';
export default function ShowProducts() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const products = await query({ query: 'SELECT * FROM `products`' });
        setProducts(products);
    }

    async function addProduct() {
        const product_name = document.getElementById("product_name").value;
        await query({ query: 'INSERT INTO `products` (`product_name`) VALUES (?)', values: [product_name] });
        getProducts();
    }
    async function updateProduct(product_id) {
        const product_name = document.getElementById("product_name").value;
        await query({ query: 'UPDATE `products` SET `product_name` = ? WHERE `product_id` = ?', values: [product_name, product_id] });
        getProducts();
    }
    async function deleteProduct(product_id) {
        await query({ query: 'DELETE FROM `products` WHERE `product_id` = ?', values: [product_id] });
        getProducts();
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1>Products</h1>
            <div>
                <input type="text" id="product_name" />
                <button onClick={() => addProduct()}>Add Product</button>
            </div>
            {
                products == [] ?
                    <div>No products</div>
                    :
                    products.map((product) => {
                        return (
                            <div key={product.product_id}>
                                <div>{product.product_name}</div>
                                <button onClick={() => updateProduct(product.product_id)}>Update</button>
                                <button onClick={() => deleteProduct(product.product_id)}>Delete</button>
                            </div>
                        )
                    })
            }
        </>
    )
}
