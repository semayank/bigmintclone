import QuestionMark from "./QuestionMark";
import { archivo400 } from "@/lib/fonts";

export default function Chat(){
    return <><div className="fixed bottom-4 right-0 bg-[#2A9DF5] rounded-tl-full rounded-bl-full rounded-br-lg ">
        <button className="inline-flex flex-row w-full items-center justify-between gap-x-2 px-2 py-1  rounded-tl-full rounded-bl-full rounded-br-lg">
            <div> <QuestionMark/> </div>
            <div><span className={`${archivo400.className} text-[14px] leading-[14px]`}>Chat with Us </span></div>
        </button>
        </div></>
}