import { archivo500 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";

export default function Section4(){
    return <>
    <BodyLayout>
    <div className="border border-green-500 m-[1px] p-[1px] ">
     <div className="border border-black m-1 p-1 flex flex-col items-center justify-between gap-y-[15px]">
        <div className="flex flex-row items-center justify-start border border-pink-500 m-1 p-1 w-full">
        <div className="inline-flex flex-row items-center justify-start border border-green-500 m-1 p-1 gap-x-2">
            <h3 className={`${archivo500.className} section2header text-[#FF4036]`}>What we do</h3>
            <span className="w-[100px] h-0.5 bg-[#FF4036]"></span>
            </div>
        </div>
        <div className="border border-black m-1 p-1">
        <p className={`${archivo500.className} section1para`}>BigMint enables you to take critical market decisions by providing a robust platform for pricing, data and networking. This keeps you at the forefront of the industry.</p>
        </div>
        <div className="border border-black m-1 p-1">
        <p className={`${archivo500.className} section1para`}>We add further value by offering reliable insights and consulting services for a host of Commodity markets. Our services include:</p>
        </div>           
     </div>
    </div>
    </BodyLayout>
    </>
}