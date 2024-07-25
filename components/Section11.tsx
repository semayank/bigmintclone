import { archivo400, archivo700 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";

export default function Section11() {
  return (
    <>
      <BodyLayout>
        <div className="border  border-green-500 m-[1px] p-[1px]">
            <div className="border border-black flex flex-col items-center justify-between gap-y-2">
                <div className="flex flex-col items-start justify-between border border-blue-500 m-[1px] p-[1px]">
                    <div className=" border border-pink-500 m-[1px] p-[1px] inline-flex flex-row items-center w-full justify-start gap-x-2">
                        <h3 className={`${archivo700.className} text-[#FF4036] section10header`}>Insights & Intels</h3>
                        <span className="w-[100px] h-0.5 bg-[#FF4036]"></span>
                        </div>
                    <p className={`${archivo400.className}  section10para`}>
                    With precision in market trends, our insights offer strategic foresight for decisive moves in commodities markets.
                    </p>
                </div>
            </div>
        </div>
      </BodyLayout>
    </>
  );
}
