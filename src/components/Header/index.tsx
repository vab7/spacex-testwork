import React from "react";
import { Logo } from "../../images/Logo";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { NavLinks } from "./NavLinks";
import s from "./Header.module.scss";
import { ButtonMenu } from "./ButtonMenu";

export const Header: React.FC = () => {
  const [menuClose, setMenuClose] = React.useState(true);

  const onClickBurger = (hide = false) => {
    if (hide) {
      setMenuClose(true);
    } else {
      setMenuClose(!menuClose);
    }
  };

  return (
    <header className={`${s.header}`}>
      <Container>
        <Row>
          <div className={`${s.header_inner}`}>
            <a href="/">
              <div className={`${s.logo}`}>
                <Logo />
                <div className={`${s.angle_1}`}></div>
                <div className={`${s.angle_2}`}></div>
                <div className={`${s.angle_3}`}></div>
                <div className={`${s.angle_4}`}></div>
              </div>
            </a>
            <NavLinks menuClose={menuClose} />
            <div
              onClick={() => onClickBurger(true)}
              className={`${s.close_menu} ${menuClose ? "none" : s.menu_dark}`}
            ></div>
            <div className={s.burger_menu}>
              <ButtonMenu close={menuClose} onClickBurger={onClickBurger} />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
