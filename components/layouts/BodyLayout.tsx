export type BodyLayoutType={
    children:React.ReactNode
}
export default function BodyLayout( {children }:BodyLayoutType){
    return <>
    <section className="container mx-auto px-[5%] mb-4 border border-blue-500 m-0.5 p-0.5">
        {children}
    </section>
        </>

}