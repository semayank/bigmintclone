import {archivo500, archivo700 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";

export default function Section2(){
    return (<>
    <BodyLayout>
    <div className="border border-green-500 m-[1px] p-[1px] flex flex-col items-center justify-between">
        
     <div className="flex flex-row gap-x-2 w-full border border-black m-1 p-1 items-center justify-start">
        <h3 className={`${archivo700.className} section2header text-[#FF4036]`}>Export the markets</h3>
        <span className="w-[100px] h-0.5 bg-[#FF4036]"></span>
     </div> 
     
     <div className="border border-black m-1 p-1">
        <p className={`${archivo500.className} section1para`}>BigMint is a gateway to the world of insights spanning metals, minerals, energies, and providing 600+ commodity price assessments across 30+ countries.</p>
        </div>         
    </div>
    </BodyLayout>
    </>)
}