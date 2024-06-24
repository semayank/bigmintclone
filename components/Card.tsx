import { archivo500 } from "@/lib/fonts"
import Link from "next/link"

export type CardPropsType={
    image_url:string,
    name:string
}
export default function Card({image_url,name}:CardPropsType){
    return (<>
      <div className="relative cursor-pointer w-[255px] sm:cardimage">
        <div className="w-full"><img src={image_url} className="aspect-auto"/></div>
        <div className="absolute bottom-2 left-2 cardlabelwidth">
            <div className="flex flex-row items-center justify-between text-nowrap">
                <h2 className={`${archivo500.className} text-white`}>{name}</h2>
                <Link href={"/"}><img src={"./arrow.png"} className="arrowimage"></img></Link>
            </div>
        </div>
      </div>
    </>)
}