import React from "react";
import s from "./NavItem.module.scss";

export interface INavItem {
  id: number;
  title: string;
}

export const NavItem: React.FC<INavItem> = ({ title }) => {
  return (
    <>
      <li className={s.nav_item}>
        <a href="/">{title}</a>
      </li>
      <div className={`${s.link_line} line`}></div>
    </>
  );
};
