import * as React from "react"
import Image from "next/image";
import BodyLayout from "./layouts/BodyLayout";
import AutoPlayCarousel from "./Carousel/AutoPlayCarousel";


export default function Section7(){
    return <>
    <BodyLayout>
    <div className="border border-green-500 m-[1px] p-[1px]">
     <AutoPlayCarousel/>
    </div>
    </BodyLayout>
    </>
}