import React from "react";
import s from "./Content.module.scss";
import IBoxFeature, { BoxFeature } from "../BoxFeature";

export const Content: React.FC = () => {
  const featureList: IBoxFeature[] = [
    {
      id: 1,
      topText: "мы",
      strongTitle: "1",
      bottomText: "на рынке",
    },
    {
      id: 2,
      topText: "гарантируем",
      strongTitle: "50%",
      bottomText: "безопасность",
    },
    {
      id: 3,
      topText: "календарик за",
      strongTitle: "2001",
      bottomText: "в подарок",
    },
    {
      id: 4,
      topText: "путешествие",
      strongTitle: "597",
      bottomText: "дней",
    },
  ];

  return (
    <div className={`${s.content_feature} content-c`}>
      <div className={`${s.content_box} content-c wrap`}>
        {featureList.map((box, index) => (
          <BoxFeature key={box.id} index={index} {...box} />
        ))}
      </div>
    </div>
  );
};
