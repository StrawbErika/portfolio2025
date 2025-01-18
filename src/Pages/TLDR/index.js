import React, { useState } from "react";

import styles from "./style.module.scss";
import bop from "./../../Assets/00000007.mp3";
import useSound from "use-sound";
import { workDetails } from "./constants";
export function TLDR() {
  const [play, { stop }] = useSound(bop, { volume: 0.5 });

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={styles.page} id="TLDR">
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <p className={styles.headerTitle}> Erika Louise A. Nepomuceno</p>
          <p className={styles.subtitle}> Artist && Developer </p>
          <hr />
        </div>
        <div className={styles.work}>
          <p className={styles.title}>Work Experience</p>
          {workDetails.map((work) => {
            return (
              <div className={styles.jobBlock}>
                <p className={styles.company}>
                  {work.Company} ({work.Year})
                </p>
                <div className={styles.techStack}>
                  {work.TechStack.map((tech) => {
                    return (
                      <div
                        className={styles.tech}
                        onMouseEnter={() => {
                          setIsHovering(true);
                          play();
                        }}
                        onMouseLeave={() => {
                          setIsHovering(false);
                          stop();
                        }}
                      >
                        {" "}
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <ul className={styles.descriptions}>
                  {work.Descriptions.map((desc) => {
                    return <li>{desc}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
