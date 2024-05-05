import React from 'react';

function About() {
    const contentStyle = {
        padding: '120px',
        backgroundColor: '#f6f6f6',
        marginTop: '2.5%',
    };
      
    const textStyle = {
        textAlign: 'center',
        fontColor: '#151515',
    };
    
    return (
        <div style={contentStyle} className="content">
          <h1 className="text-center" style={{letterSpacing:'1.1rem', fontWeight: '600', padding: '5% 0 1% 0', color: '#151515', fontSize: '2.5rem'}}>DISCOVER THE BEST</h1>
          <h2 style={textStyle}>Your Destination for Premium Men's T-Shirts in Sri Lanka!</h2>
          <p style={textStyle}>Elevate your style with our meticulously curated collection, blending comfort and sophistication seamlessly. From casual classics to refined essentials, each garment is crafted with precision and passion, ensuring unparalleled quality and style. Explore our range today and redefine your wardrobe with Konik's signature blend of luxury and versatility.</p>
        </div>
    );
}
    
export default About;