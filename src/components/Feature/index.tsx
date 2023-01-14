import React, { createRef } from "react";
import style from "./Feature.module.scss";
import mars from "../../images/mars4.png";
import s from "./Feature.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import rocket from "../../images/rocket.png";
import { Content } from "../Content";

export const Feature: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(
    document.documentElement.clientWidth
  );
  const [windowHeight, setWindowHeight] = React.useState(
    document.documentElement.clientHeight
  );
  const wDh = 1.7777777777777777;

  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  let widthMars = 0;
  let marginMars = 0;

  if (windowWidth / windowHeight >= wDh) {
    widthMars = windowWidth / 4.45;
    marginMars = widthMars / 2;
  } else {
    widthMars = windowHeight / 2.5;
    marginMars = widthMars / 2;
  }

  if (windowWidth <= 992) {
    widthMars += 35;
    marginMars += 17.5;
  }

  React.useEffect(() => {
    window.onresize = () => {
      setWindowWidth(document.documentElement.clientWidth);
      setWindowHeight(document.documentElement.clientHeight);
    };
  }, [windowWidth, windowHeight]);

  return (
    <div className={`${s.feature}`}>
      <div className={style.feature__bg}>
        <Container>
          <Row>
            <div className={`${s.feature_section}`}>
              <div className={`${s.feature_title}`}>
                <h2 className={`${s.title_main}`}>путешествие</h2>
                <h2 className={`${s.title_sub}`}>на красную планету</h2>
              </div>
              <div
                className="relative"
                style={{
                  width: widthMars,
                  top: `calc(50% - ${marginMars}px)`,
                  left: `calc(50% - ${marginMars}px)`,
                }}
              >
                <img
                  src={mars}
                  className={style.mars_object}
                  style={{
                    width: widthMars,
                  }}
                  alt="mars"
                />
              </div>
              <div className={`${s.start_travel_section}`}>
                <img src={rocket} className={`${s.rocket}`} alt="Rocket" />
                <span className={`${s.line_long}`}>
                  <button
                    onClick={() => alert("Поехали!")}
                    className={s.btn_start_travel}
                  >
                    Начать путешествие
                  </button>
                  <span className={`${s.line_short}`}></span>
                  <span className={`${s.line_round}`}></span>
                </span>
              </div>
              <Content />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};
