import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../css/homepage.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
  return (
    <div className="carousel-container">
      <div className="carousel-text">
        <h1>Welcome to our Purr!</h1>
      </div>
      <Link to="/products">
        <Button variant="contained" color="success" className="carousel-button">
          Go to shop
        </Button>
      </Link>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1576523163370-da5ed028ade6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1571570703598-39eb580a0329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1561147390-58a2d3cbff03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img
            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}
