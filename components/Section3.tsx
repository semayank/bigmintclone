import { archivo500, archivo700 } from "@/lib/fonts";
import Card from "./Card";
import { archivo400 } from "@/lib/fonts";

export default function Section3(){
    const arr=[{
        image_url:"./explore_ferrous.png",
        name:"Ferrous",
    },
    {
        image_url:"./explore_nonferrous.png",
        name:"Non Ferrous",
    },
    {
        image_url:"./explore_coal.png",
        name:"Coal and Energy",
    },
    {
        image_url:"./explore_scrap_recyle.png",
        name:"Scrap Recycling",
    }
];
    return (<>
    <section className="container mx-auto px-[5%] border border-blue-500 m-0.5 p-0.5">
    <div className="border border-green-500 m-[1px] p-[1px] ">
        <div className="border border-black m-1 p-1 gap-y-1 flex flex-col md:gap-y-0 md:gap-x-1 md:flex-row items-center justify-between">
            {
                arr.map((item)=>{
                    return <><Card key={item.image_url} image_url={item.image_url} name={item.name}/></>
                })
            }
        </div>
        <div className="border border-black m-1 p-1">
            <div className="flex flex-row border border-blue-500 m-1 p-1 items-center justify-end">
                <button className={`${archivo400.className} px-3 py-2 text-[16px] bg-[#FF4036] text-white`}>Explore more</button>
            </div>

        </div>
          
    </div>
    </section>
    </>)
}