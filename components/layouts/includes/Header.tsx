import Image from "next/image";
import HeadNavBar from "./HeadNavBar";



export default function Header() {
  return (
    <>
      <header className="w-full">
        <div className="relative flex flex-col  w-full">
          <video
            autoPlay
            className="object-cover h-[580px] w-full"
            controls={false}
            muted
            loop
          >
            <source
              type="video/mp4"
              src="./bigmint_background_blank.mp4"
            ></source>
            
          </video>

          <div className="absolute top-10 z-10 left-5">
            <nav className="flex flex-row items-center border border-black m-[1px] p-[1px] justify-between">
              <div className="inline-flex flex-row">
                <div>
                  <button className="group inline-block cursor-pointer">
                    <div className="group-hover:w-4 line h-0.5 rounded-full w-2 duration-300 transition-all my-1.5 bg-white"></div>
                    <div className="group-hover:w-4 line h-0.5 rounded-full w-4  duration-300 transition-all my-1.5 bg-white "></div>
                    <div className="group-hover:w-4 line h-0.5 rounded-full  w-1  duration-300 transition-all my-1.5 bg-white"></div>
                  </button>
                </div>
                <div>
                    <img src="./bm_white_logo.png" className=" object-scale-down"/>
                </div>
              </div>
            </nav>
          </div>
      
          <div className="absolute headerparadiv font-bold text-[#e3effd] top-[30%]  border border-pink-500 left-[12%]"><p className="headerpara">
          We are a trusted platform for price reporting, market intelligence &amp; consulting for commodities
          </p></div>
          <div className=" absolute z-10 left-0 w-full  align-middle  bottom-0 max-w-full">
          <img className="md:hidden w-full" src="./bm_home_top_band_mobile.png"></img>
            <img className="hidden w-full md:flex" src="./orange_band.png"></img>
            </div>
        </div>
      </header>
    </>
  );
}