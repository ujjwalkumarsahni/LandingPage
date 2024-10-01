import React from 'react';
import product from '../assets/product.png';
import './Card.css';

const Card = () => {
  // Create an array of products (for demonstration, the same product is repeated)
  const products = Array(20).fill({
    title: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: product,
  });

  return (
    <div className='product'>
      <div className='all-products'>
        <p>All Product</p>
      </div>
      <ul>
        <li>Filter: <span>All Products</span></li>
        <li>Sort: <span>Best Selling</span></li>
      </ul>

      <div className='cards-container'>
        {products.map((product, index) => (
          <div className='card-div' key={index}>
            <img src={product.image} alt={product.title} />
            <p className='title'>{product.title}</p>
            <p className='price'>{product.price}</p>
            <button>BUY NOW</button>
          </div>
        ))}
      </div>

      <div className='view'><button>View All</button></div>
    </div>
  );
}

export default Card;
