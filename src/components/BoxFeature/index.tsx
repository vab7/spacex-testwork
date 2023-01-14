import React from "react";
import s from "./BoxFeature.module.scss";

export default interface IBoxFeature {
  id: number;
  topText: string;
  strongTitle: string;
  bottomText: string;
  index?: number;
}

export const BoxFeature: React.FC<IBoxFeature> = ({
  topText,
  strongTitle,
  bottomText,
  index,
}) => {
  let gradient = false;
  let item_box: any;

  if (index != null) {
    gradient = index % 2 == 0;

    switch (index) {
      case 0:
        item_box = s.box_item_1;
        break;
      case 1:
        item_box = s.box_item_2;
        break;
      case 2:
        item_box = s.box_item_3;
        break;
      case 3:
        item_box = s.box_item_4;
        break;
      default:
        item_box = "";
    }
  }

  return (
    <div
      className={`${s.box_feature} ${item_box} box_item-${index} align-c content-c column`}
    >
      <span className={`${s.top_text} color-1`}>{topText}</span>
      <span
        className={`${s.strong_title} ${
          gradient ? s.box_gradient : s.box_default
        }`}
      >
        {strongTitle}
        {index === 2 && <span className={`${s.box_year}`}>г.</span>}
      </span>
      <span className={`${s.bottom_text} color-1`}>{bottomText}</span>
    </div>
  );
};
