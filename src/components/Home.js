import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/bg.png"
          className="card-img"
          alt="Background"
          height={600}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">Check Out All The Trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
