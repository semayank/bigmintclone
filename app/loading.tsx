import Image from "next/image"
export default function HomeLoadingPage(){
     return <><main className="h-[50vh] w-[50vw]  opacity-35">
     <div  className="flex flex-col items-center justify-center">
        <Image  width={50} height={50} src={"/loader.gif"} alt={""} />
        </div>
     </main>
    </>
}