import { archivo400, archivo500, archivo700 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";
import Image from "next/image";

export default function Section10() {
  return (
    <>
      <BodyLayout>
        <div className="border  border-green-500 m-[1px] p-[1px]">
          <div className="flex flex-col border border-black m-[1px] p-[1px] gap-y-4">
            <div className="flex flex-row items-center justify-start border border-black m-[1px] p-[1px] gap-x-[14px]">
              <div>
                <h3
                  className={`${archivo700.className} text-[#FF4036] section10header`}
                >
                  How we do it
                </h3>
              </div>
              <div className="inline-flex flex-col items-center justify-center">
                <span className="w-[100px] h-0.5 bg-[#FF4036]"></span>
              </div>
            </div>
            <div>
              <p className={`${archivo400.className} section10para`}>
                Know our market specific methodologies that impart a rationale
                to our price discovery mechanisms
              </p>
            </div>
            <div className="flex flex-col items-center justify-between gap-y-4">
                <div><img alt="" src="./how-it-works.jpg"/></div>
                <div className=" border border-pink-500 w-full px-[15px] inline-flex flex-row items-center justify-end"><button className={`${archivo500.className} my-4 bg-[#FF4036] text-white py-[10px] px-[25px]`}>How It Works</button></div>
            </div>
            <div className="my-4"><p className={`${archivo400.className} section10para`}>
            BigMint gathers information from diverse networks, using globally benchmarked, compliant methods and technologies to offer crucial market intelligence.</p></div>
          </div>
        </div>
      </BodyLayout>
    </>
  );
}
