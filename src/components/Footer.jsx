import React from 'react';
import './Footer.css'; 
import product from '../assets/product.png';

const Footer = () => {
    return (
        <div className="container">
            <div className='left-footer'>
                <h2>BEST PRICE Agate Phone Grip</h2>
                <p className='price-a'><span className='price-d'>44.50$</span>19.50$</p>
                <p className='title'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</p>
                <button className='buy'>BUY NOW</button>
            </div>
            <div className="right-section">
                <div className="circle-container">
                    <div className='circle-container1'>
                        <div className="circle-container2">
                            <div className="circle-container3">
                                <div className="inner-circle">
                                    <img src={product} alt="Your Image" className="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;