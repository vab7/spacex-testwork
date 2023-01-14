import React from "react";
import { INavItem, NavItem } from "../NavItem";
import s from "./NavLinks.module.scss";

const navigation: INavItem[] = [
  { id: 1, title: "Главная" },
  { id: 2, title: "Технология" },
  { id: 3, title: "График полетов" },
  { id: 4, title: "Гарантии" },
  { id: 5, title: "О компании" },
  { id: 6, title: "Контакты" },
];

interface INavLinks {
  menuClose: boolean;
}

export const NavLinks: React.FC<INavLinks> = ({ menuClose }) => {
  return (
    <div className={`${s.nav_links} ${menuClose ? s.nav_close : ""}`}>
      {navigation.map((link) => (
        <NavItem key={link.id} {...link} />
      ))}
    </div>
  );
};
