import AdvantageCard from "./AdvantageCard";
import BodyLayout from "./layouts/BodyLayout";

const cards = [
  {
    id: 901,
    title: "Negotiations & Risk Management",
    logourl: "/advantagecards/rm.png",
    content:
      "Get access to responsible pricing powered by our robust methodology. Negotiate with confidence & protect your bottom line through informed decision-making.",
  },
  {
    id: 902,
    title: "In-depth Market Analysis",
    logourl: "/advantagecards/ma.png",
    content:
      "Streamline strategic decisions with our expert analysis. Track logistics with tailored data & gain a 360° perspective with exhaustive reports.",
  },
  {
    id: 903,
    title: "Agile Strategy",
    logourl: "/advantagecards/as.png",
    content:
      "Gain data-driven insights that reduce uncertainty. Make informed decisions that streamline operations to build sustainable & resilient businesses.",
  },
  {
    id: 904,
    title: "Community Networking",
    logourl: "/advantagecards/cn.png",
    content:
      "Tap into our professional network to foster meaningful relationships & showcase your offerings at exclusive conferences for collaboration & growth.",
  },
];

export default function Section9() {
  return (
    <>
      <BodyLayout>
        <div className="border border-green-500 m-[1px] p-[1px]">
          <div className="border border-black flex flex-col items-center justify-between  gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            cards.map((card)=>{
                return <><AdvantageCard key={card.id} id={card.id} title={card.title} content={card.content} logourl={card.logourl}/></>
            })
          }
          </div>
        </div>
      </BodyLayout>
    </>
  );
}
