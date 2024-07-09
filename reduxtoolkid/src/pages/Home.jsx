import React, { useState, useEffect } from 'react';
import { add } from './Redux/Cartslice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleadd=(product)=>{
    dispatch(add(product))
  }

  return (
    
    <>
    <div className='productsWrapper'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='img'/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=>handleadd(product)}>add to cart</button> 
        </div>
      ))}
      <p>This is my home</p>
      </div>
    </>
  );
};

export default Home;
