import { archivo500, archivo700 } from "@/lib/fonts";


export type ServicesCardPropsType={
  image_url:string;
  heading:string;
  content:string;
}
export default function ServicesCard({image_url,heading,content}:ServicesCardPropsType){
    return <>
    <div className="flex flex-col items-start justify-between  border border-green-500 m-0.5 p-0.5">
    <div className="flex flex-col items-start justify-start gap-y-2 border border-orange-500 m-0.5 p-0.5">
        <div><img src={image_url} className="w-[60px] h-[60px]" alt={heading.toLowerCase()}></img></div>
        <div className="inline-flex flex-col items-start justify-start">
        <div><h3 className={`${archivo700.className} servicescardfont`}>{heading}</h3></div>
        <div><p className={`${archivo500.className} servicescardfont`}>{content}</p></div>
    </div>
    </div>
        <div className="border border-orange-500 m-0.5 p-0.5 w-full"><div className="border border-green-500 m-0.5 p-0.5 "><img src={"./rightarrow.png"} className="rightarrowsize" alt="rightarrow"></img></div>
    </div></div>
    </>
}