import React from 'react';
import '../css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="reveal-text">
        <h1>Welcome to Our E-Commerce Store!</h1>
      </div>
      <div className="reveal-text">
        <p>Discover the latest products, exclusive deals, and more.</p>
      </div>
      <h4>We offer a wide range of products from electronics to clothing. 
        Browse our collection and find something you love!</h4>
    </div>
  );
};

export default Home;
