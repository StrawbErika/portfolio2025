import { useState } from "react";
import styles from "./style.module.scss";
import picture from "./../../Assets/picture.jpg";
import { titles, colors } from "./constants";

export function AboutLayout() {
  const [reveal, setReveal] = useState([]);

  // TODO: sound?
  return (
    <div className={styles.about}>
      <div className={styles.title}>ERIKA LOUISE A. NEPOMUCENO</div>
      <div className={styles.subtitle}>
        Get to know Erika a little bit more!
      </div>
      <div className={styles.content}>
        <img className={styles.picture} src={picture} alt={"Erika"} />

        <div className={styles.textContainer}>
          <div className={styles.desc}> She is a ...</div>

          <div className={styles.textStack}>
            {titles.map((elem, i) => {
              const exists = reveal.filter((index) => index === i).length > 0;
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (exists) {
                      setReveal(reveal.filter((index) => index !== i));
                    } else {
                      setReveal(reveal.concat(i));
                    }
                  }}
                  style={
                    exists
                      ? {
                          backgroundColor: `${colors[i]}`,
                          borderColor: `${colors[i]}`,
                          color: "black",
                        }
                      : {}
                  }
                  className={styles.text}
                  //   onMouseEnter={() => {
                  //     play();
                  //   }}
                  //   onMouseLeave={() => {
                  //     stop();
                  //   }}
                >
                  {elem}
                </div>
              );
            })}
          </div>
          <div className={styles.subscript}>
            * she created most, if not all, visual assets in this project!
          </div>
        </div>
      </div>
    </div>
  );
}
