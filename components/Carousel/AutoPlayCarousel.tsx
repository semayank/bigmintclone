import React from "react";
import "./autoplaycarousel.css";
import { companies } from "./carousel-config";
import CarouselItem from "./CarouselItem";


export default function AutoPlayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {companies.map((company) => {
          return (
            <CarouselItem key={company.id} imgUrl={company.url} />
          );
        })}
        {companies.map((company) => {
          return (
            <CarouselItem key={company.id} imgUrl={company.url} />
          );
        })}
      </div>
    </div>
  );
}