import Link from "next/link"


export default function FooterNavLinks(){
    const navheading=["Company","Products","Region","Our Features","Help"]
    const headingcontents=[{"Company":{0:"About BigMint",1:"Contact us",2:"",3:"",4:"",5:""}},{"Products":{}},{"Region":{}}
        ,{"Our Features":{}},{"Help":{}}
    ]
    return (<>{
    navheading.map((val,ind,oa)=>{ 
        return <nav key={`${val}_${ind}`} className=" m-1 ">
            <h5 className=" text-[16px] text-[#3B444F] m-1  font-bold ">
              {val}
            </h5>
            {
           headingcontents.map((val1,ind1,oa1)=>{return <ul key={`${val1}_${ind1}`} className=" text-[16px] font-medium not-italic gap-4  m-1  inline-flex flex-col">
              <Link href={"/"}><li className="hover:underline cursor-pointer">
              {val}[`${ind1}`] </li></Link>
            </ul>})
           }
          </nav>})
        }    
    </>)
}