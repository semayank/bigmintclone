import Image from "next/image";
import HeadNavBar from "./HeadNavBar";


export default function Header() {
  return (
    <>
      <header>
        <div className="relative">
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

          <div className="absolute top-10 z-10 left-5 border border-white">
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
        </div>
      </header>
    </>
  );
}
