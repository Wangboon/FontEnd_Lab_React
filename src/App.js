import logo from './logo.svg';
import './App.css';
import './features/Navbar';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import AddForm from './features/Product/AddForm';
import { Routes, Route } from 'react-router-dom';
import UpdateForm from './features/Product/UpdateForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://apimocha.com/wang/products'
      );
      setProducts(products.data);
    }

    getProducts();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>

    </div>

  );
}



export default App;
