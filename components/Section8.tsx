import { archivo400, archivo500, archivo700 } from "@/lib/fonts";
import BodyLayout from "./layouts/BodyLayout";
import React from "react";

const contents = [
  {
    id: 801,
    heady: "Manufacturers",
    content:
      "We equip manufacturers with market forecasts & trends, assisting them in risk management & optimising their production processes.",
  },
  {
    id: 802,
    heady: "Traders",
    content:
      "We provide traders with comprehensive market intelligence that drives informed decisions, efficient trading strategies & risk mitigation for them.",
  },
  {
    id: 803,
    heady: "Importers and Exporters",
    content:
      "We assist importers & exporters in identifying new markets, optimising supply chains, ensuring cost-effective procurement & efficient distribution of goods.",
  },
  {
    id: 804,
    heady: "Miners",
    content:
      "We enable miners to optimise production planning, facilitate strategic partnerships & safeguard operations against adverse market conditions.",
  },
];

export default function Section8() {
  return (
    <>
      <BodyLayout>
        <div className="border border-green-500 m-[1px] p-[1px]">
          <div className="border border-black flex flex-col items-start justify-between gap-y-2 m-0.5 p-0.5">
            <div>
              <h1 className={`${archivo500.className} section8header`}>
                Some of the stakeholders who benefit from our expertise.
              </h1>
            </div>
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:gap-x-5 md:flex-row items-start justify-between">
              {contents.map((content) => {
                return (
                  <>
                    <div
                      key={content.id}
                      className={`flex flex-col section8fonts items-start justify-between  gap-y-1`}
                    >
                      <div>
                        <h1 className={`${archivo700.className}`}>
                          {content.heady}
                        </h1>
                      </div>
                      <div>
                        <p
                          className={`${archivo400.className} text-wrap text-left`}
                        >
                          {content.content}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </BodyLayout>
    </>
  );
}
