import BodyLayout from "@/components/layouts/BodyLayout";
import ServicesCard from "./ServicesCard";

export default function Section5(){
    const arr=[{
        image_url:"./price_icon.png",
        heading:"Price",
        content:"Track precise price movements governed by robust methodologies and IOSCO principles"
    },
    {
        image_url:"./insights_icon.png",
        heading:"Insights",
        content:"Catch the pulse of the market with real-time updates and analysis"
    },
    {
        image_url:"./data_stats.png",
        heading:"Statistics",
        content:"Get a comprehensive dataset on production, capacity, export, imports &amp; inventories that drives decisions"
    },
    {
        image_url:"./data_stats.png",
        heading:"Data",
        content:"Harness the power of historical intelligence. Access a vast library of historical prices and essential market statistics"
    },
    {
        image_url:"./consulting_icon.png",
        heading:"Consulting",
        content:"Keep pace with the latest market trends with our personalised consulting services"
    },
    {
        image_url:"./reports_icon.png",
        heading:"Reports",
        content:"Make informed decisions powered by comprehensive reports on commodities and regions"
    },
    {
        image_url:"./logistics_icon.png",
        heading:"Logistics",
        content:"Gain deeper understanding of global trades with up-to-date vessel lineup data"
    },
    {
        image_url:"./tenders_icon.png",
        heading:"Tenders",
        content:"Generate new leads, expand your reach and enhance your business prospects with comprehensive tender insights"
    }]
    return <>
    <BodyLayout>
    <div className="border border-green-500 m-[1px] p-[1px] ">
            <div className=" gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-black m-1 p-1">
               {
                arr.map((item)=>{
                    return <><ServicesCard key={item.image_url} image_url={item.image_url} content={item.content} heading={item.heading}/></>
                })
               }
            </div>
    </div>
    </BodyLayout>
    </>
}