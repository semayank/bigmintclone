import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link";
import {archivo400,archivo700} from "@/lib/fonts";
  

  export type FooterAccordianType={
    header:string;
    contents:string[];

  }
  export default function FooterAccordian({header,contents}:FooterAccordianType){
    return (
      <Accordion type="single" collapsible className="w-full border border-orange-500 m-0.5 p-0.5">
        <AccordionItem value="item-1">
          <AccordionTrigger className={`${archivo700.className} text-[#FF4036] hover:no-underline text-[16px]`}>{header}</AccordionTrigger>
          <AccordionContent>
            <ul className="gap-y-3 border border-black m-0.5 p-0.5 gap-7 text-[0.85rem]">
                {
                    contents.map((item)=>{
                        return <><Link href={"/"}><li className={`${archivo400.className} hover:text-[#2A9DF5] hover:no-underline`} key={item}>{item}</li></Link></>
                    })
                }

            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  



