import React from 'react';

function About() {
    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '120px',
    };
      
    const textStyle = {
        textAlign: 'center',
        fontColor: '#151515',
    };
    
    return (
        <div style={contentStyle} className="content container w-100">
          <h1 style={textStyle}>Welcome to KONIK</h1>
          <h2 style={textStyle}>Your Destination for Premium Men's T-Shirts in Sri Lanka!</h2>
          <p style={textStyle}>Elevate your style with our meticulously curated collection, blending comfort and sophistication seamlessly. From casual classics to refined essentials, each garment is crafted with precision and passion, ensuring unparalleled quality and style. Explore our range today and redefine your wardrobe with Konik's signature blend of luxury and versatility.</p>
        </div>
    );
}
    
export default About;