import Link from "next/link"
import FooterAccordian from "./FooterAccordion"
import FooterAccordian2 from "./FooterAccordian2"


export default function FooterNavLinks(){
    const navheading=[{header:"Company",contents:["About BigMint","Contact us","Help & FAQ","Career","CoalMint","SiteMap"]}, 
    {header:"Products",contents:["Iron Ore","Coal","Scrap & Metallics","Steel","Ferro Alloys","Logistics","Ship Breaking"]}
    ,{header:"Region",contents:["India","China","South Asia","South East Asia","Far East Asia","MEA (Middle East Africa)","CIS Nations","UK, Europe","Americas","Oceania"]}
    ,{header:"Our Features",contents:["Prices","Insights","Tenders","Statistics","Reports","Info-graphics","Data Licensing","Content Partnership"]}
    ,{header:"Help",contents:["Contact us","Terms and Conditions","Privacy Policy","Old Website"]}]

    
  
    return (<>
       <div className="border border-black m-0.5 p-0.5 grid grid-cols-1 gap-4  border-b md:hidden">
        {
          navheading.map((item)=>{
            return <><FooterAccordian header={item.header} contents={item.contents}/></>
          })
        }
       </div>
       <div className="border gap-6 border-black m-0.5 p-0.5 hidden md:grid md:grid-cols-3 lg:grid-cols-5">
       {
          navheading.map((item)=>{
            return <><FooterAccordian2 header={item.header} contents={item.contents}/></>
          })
        }
       </div>
      
    
    </>)
}