import { archivo500 ,archivo700 } from "@/lib/fonts";
export default function Section1() {
  return (
    <>
      <section className="container mx-auto px-[5%] border border-blue-500 m-0.5 p-0.5">
        <div className="border border-green-500 m-[1px] p-[1px] flex flex-col items-center justify-between">
          <div className="flex flex-row items-center justify-start w-full border border-pink-500 m-[1px] p-[1px]">
            <h1 className={`${archivo700.className} section1header  border border-black p-[1px] mx-[1px] mt-[25px] mb-[20px] text-[#FF4036]`}>
              SteelMint & CoalMint are now BigMint!
            </h1>
          </div>
          <div className={`${archivo500.className} border border-pink-500 m-0.5 p-0.5 gap-y-[15px] md:gap-y-[30px] flex flex-col items-center justify-between`}>
            <div className="flex border gap-y-[15px] border-blue-500 flex-col items-start md:gap-y-0 md:gap-x-[30px] justify-between md:flex-row">
                <p className="w-full m-[1px] p-[1px] md:w-1/2 section1para">This transformation marks a significant milestone in our journey, symbolising our evolution into a comprehensive hub that seamlessly aligns with the dynamic nature of the commodities industry.</p>
                <p className="w-full m-[1px] p-[1px] md:w-1/2 section1para">As the world rapidly evolves, we are focused in our mission to empower you with the knowledge needed to keep you ahead in a world where adaptability is paramount.</p>
            </div>
            <div className="border border-blue-500">
                <p className="section1para m-[1px] p-[1px]">
                BigMint is a trusted platform for price reporting, market intelligence &amp; consulting for commodities.<br></br>
                We enable businesses to take critical market decisions, offering reliable insights and consulting services for a host of Commodity markets.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
