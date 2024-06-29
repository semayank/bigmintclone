import Image from "next/image";
import React from "react";

export type CarouselItemProps={
  imgUrl:string;
}
export default function CarouselItem({ imgUrl }:CarouselItemProps) {
  return (
    <div className="carousel-card">
      <Image width={300} height={250} src={imgUrl} alt={""}/>
    </div>
  );
}