import Link from "next/link";
import {archivo400,archivo700} from "@/lib/fonts";
  

  export type FooterAccordian2Type={
    header:string;
    contents:string[];

  }
export default function FooterAccordian2({header,contents}:FooterAccordian2Type){
    return <>
    <nav className={`border border-orange-500 m-0.5 p-0.5 flex flex-col items-start justify-start`}>
        <h1 className={`${archivo700.className} text-[#FF4036] border border-black m-0.5 p-0.5`}>{header}</h1>
        <ul className={`${archivo400.className}  gap-y-7 border border-black text-[#404040] m-0.5 p-0.5 text-[0.85rem]`}>
            {
                contents.map((item)=>{
                    return <><Link href={"/"}><li className="hover:text-[#2A9DF5] hover:no-underline"  key={item}>{item}</li></Link></>
                })
            }
        </ul>
    </nav>
        </>
}