import React from 'react';
import './About.css';
import product from '../assets/product.png';


const About = () => {
  return (
    <>
        <div className='main-container'>
        <div className='left-container'>
            <h2>Welcome to</h2>
            <h1>Pop Rock Crystal Shop!</h1>
            <p>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
            <button>Shop Now</button>
            <span>About Us</span>
        </div>
        <div className='right-container'>
            <div className='product-div'>
                <img src={product} alt="product" />
                <p>Crystal Agate Phone Grip - 18.99$</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default About