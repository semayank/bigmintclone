import { archivo400, archivo500 } from "@/lib/fonts"
import Link from "next/link"
export default function FooterDisclaimer(){
    return <>
    <div className="border border-green-500 m-0.5 px-0.5 py-[30px]">
        <div className={`${archivo400.className} text-[#828994] text-[10px]  gap-y-6 border border-black m-0.5 p-0.5 flex flex-col items-start justify-between`}>
            <div><p><span className={`${archivo500.className} font-semibold`}>Disclaimer:</span>BigMint Technologies Private Limited has taken due care and caution in compilation of content for its web site. Information is just for reference not intended for trading purpose or to address your particular requirement. The content includes facts, views, and opinions are of individuals and not that of the website or its management. We and our content licensors are not giving investment advice, tax advice, legal advice, or other professional advice. We and our content licensors do not guarantee or warrant the accuracy, completeness or timeliness of, or otherwise endorse these views, and opinions.
           </p></div>
            <div><p>Users/Visitors have to make their own decisions based on their own independent enquiries, appraisals, judgement, wisdom and risks. BigMint and its affiliates, or their employees, directors or agents shall not be liable or responsible for any loss or costs or any action whatsoever arising out of use or relying on the spot prices disseminated.</p></div>
            <div className="inline-flex gap-y-2 md:gap-y-0 md:gap-x-4 flex-col md:flex-row items-start justify-between">
                <div><h5 className={`${archivo500.className} text-[12px]`}>2009-2024 © BigMint Technologies Private Limited All Rights Reserved.</h5></div>
                <div className="inline-flex gap-x-3 flex-row items-start justify-between"><Link className={`${archivo500.className} text-[12px] text-[#2A9DF5]`} href={"/"} >Terms & Conditions</Link>
                <Link href={"/"} className={`${archivo500.className} text-[12px] text-[#2A9DF5]`}>Privacy Policy</Link></div>
            </div>

        </div>
    </div>
    </>
}