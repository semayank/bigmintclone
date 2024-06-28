import { archivo700 } from "@/lib/fonts"
import { GrApple } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";


export default function FooterSocialMedia(){
    return <>
    <div className="border border-black m-0.5 p-0.5 flex flex-col md:flex-row items-center justify-end">
        <div className="border border-green-500 m-0.5 p-0.5 flex flex-row items-center justify-between">
          <div className="border border-orange-500 m-0.5 p-0.5 flex flex-col  gap-y-2 items-start justify-between">
            <div><h3 className={`${archivo700.className} text-[#FF4036] text-[16px]`}>Download App</h3></div>
            <div className="inline-flex flex-row items-start justify-between space-x-4">
            <Link href={"/"}><GrApple size={25} color="#024CA1"/></Link>
            <Link href={"/"}><IoLogoGooglePlaystore size={25} color="#024CA1"/></Link>
                </div>

          </div>
          <div className="border border-orange-500 m-0.5 p-0.5 gap-y-2 flex flex-col items-start justify-between">
            <div><h3 className={`${archivo700.className} text-[#FF4036] text-[16px]`}>Follow us on</h3></div>
            <div className="inline-flex flex-row  items-start justify-between space-x-4">
            <Link href={"/"}><FaFacebookF size={25} color="#024CA1" /></Link>
            <Link href={"/"}><FaLinkedinIn size={25} color="#024CA1" /></Link>
            <Link href={"/"}><FaSquareXTwitter size={25} color="#024CA1" /></Link>
            <Link href={"/"}><Image  width={25} height={25} src={"/youtube.svg"} alt={""} /></Link>
            <Link href={"/"}><RiInstagramFill size={25} color="#024CA1"/></Link>
            <Link href={"/"}><Image  width={25} height={25} src={"/google-news.svg"} alt={""} /></Link>
            </div>
          </div>
          </div>
    </div>
    </>
}