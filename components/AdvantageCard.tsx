import { archivo400, archivo700 } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export type AdvantageCardProps = {
  id: number;
  title: string;
  logourl: string;
  content: string;
};

export default function AdvantageCard({
  id,
  title,
  logourl,
  content,
}: AdvantageCardProps) {
  return (
    <>
      <div className="bg-[#F1F1FF] p-[10px] w-[275px] h-[564px]">
        <div className="flex flex-col items-center justify-between border border-black h-full">
          <div className="my-[18px]">
            <h3 className={`${archivo700.className} text-center  text-[20px]`}>
              {title}
            </h3>
          </div>
          <div>
            <Image src={logourl} width={100} height={100} alt="" />
          </div>
          <div>
            <p className={`${archivo400.className} mt-[25px] mb-[16px] p-[10px] text-[20px]`}>{content}</p>
          </div>
          <div>
            <Link
              href={"/"}
              className={`${archivo400.className} flex flex-row items-center justify-center gap-x-2 text-[20px]`}
            >
              <h3>Explore more </h3>{" "}
              <Image src={"/rightarrow.png"} width={30} height={25} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
