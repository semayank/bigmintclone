import { archivo500, archivo700 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";

export default function Section6() {
  return (
    <>
      <BodyLayout>
        <div className="border border-green-500 m-[1px] p-[1px]">
          <div className="flex  border border-black m-0.5 p-0.5  flex-col items-start justify-start gap-y-3">
            <div className="inline-flex flex-row gap-x-1 items-center justify-between border border-red-500 m-0.5 p-0.5">
              <p
                className={`${archivo700.className} section2header text-[#FF4036]`}
              >
                Why clients trust us
              </p>
              <span className="w-[100px] h-0.5 bg-[#FF4036] flex"></span>
            </div>
            <div>
              <p className={`${archivo500.className} section1para`}>
                BigMint drives growth and development of several commodity
                industries, bringing transparency to unorganised and opaque
                markets, thereby enabling businesses to take critical decisions
                with confidence.
              </p>
            </div>
            <div>
              <p className={`${archivo500.className} section1para`}>
                Our clients include industry leaders, visionaries, and
                innovators who have entrusted us with their success.
              </p>
            </div>
          </div>
        </div>
      </BodyLayout>
    </>
  );
}
