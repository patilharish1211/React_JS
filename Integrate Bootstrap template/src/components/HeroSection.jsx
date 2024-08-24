
import React from 'react';

const HeroSection = () => {
  return (
    <div className="container-fluid hero-section text-center">
      <div className="row align-items-center justify-content-center min-vh-100">
        <div className="col-md-6">
          <h1>Hello, This is Patil Harish</h1>
          <p className="lead">
            A Trainee MERN-Stack developer from India. I am Currently in the training phase.
          </p>
          <a href="#contact" className="btn btn-danger btn-lg">I'M AVAILABLE</a>
          <div className="social-icons mt-3">
            <a href="#" className="me-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <img src='https://i.redd.it/imtbr6p1i8ba1.jpg' alt="KYa Dekh Raha Du Kya kharcha paani" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
