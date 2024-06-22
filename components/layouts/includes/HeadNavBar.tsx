export default function HeadNavBar(){
    return (<>
    <div className="absolute top-10 z-10 left-5">
        <nav className="flex flex-row items-center justify-between">
           <div className="">
           <div className="inline-block cursor-pointer md:hidden">
            <button>
            <div className="line h-1 rounded-full w-4 my-1 bg-white "></div>
            <div className="line h-1 rounded-full w-6 my-1 bg-white "></div>
            <div className="line h-1 rounded-full w-2 my-1 bg-white"></div>
            </button>
            </div>
           </div>
           <div></div>
           <div></div>
        </nav>
    </div>
    </>);
}