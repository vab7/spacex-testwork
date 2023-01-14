import React from "react";
import s from "./ButtonMenu.module.scss";

interface IButtonMenu {
  close: boolean;
  onClickBurger: () => void;
}

export const ButtonMenu: React.FC<IButtonMenu> = ({ close, onClickBurger }) => {
  return (
    <button onClick={() => onClickBurger()} className={s.hamburger}>
      <div id={`${close ? "" : s.bar_1}`} className={s.bar}></div>
      <div className={`${close ? s.bar : "hidden"}`}></div>
      <div id={`${close ? "" : s.bar_3}`} className={s.bar}></div>
    </button>
  );
};
