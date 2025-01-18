import React, { useState } from "react";
import styles from "./style.module.scss";
import bop from "./../../Assets/bop.mp3";
import beep from "./../../Assets/beep.mp3";
import open from "./../../Assets/open.mp3";
import close from "./../../Assets/close.mp3";
import useSound from "use-sound";
import { workDetails, extraCurricularDetails } from "./constants";
import {
  AiOutlineMail,
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCaretRight,
  AiOutlineCaretDown,
} from "react-icons/ai";
export function TLDR() {
  const [play, { stop }] = useSound(bop, { volume: 0.5 });
  const [playBeep] = useSound(beep, { volume: 0.5 });
  const [playOpen] = useSound(open, { volume: 0.5 });
  const [playClose] = useSound(close, { volume: 0.5 });
  const [openWork, setOpenWork] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <div className={styles.page} id="TLDR">
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <p className={styles.headerTitle}> Erika Louise A. Nepomuceno</p>
          <p className={styles.subtitle}> Artist && Developer </p>
          <hr />
        </div>
        <div className={styles.work}>
          <div
            className={styles.titleButton}
            onClick={() => {
              if (openWork) {
                playClose();
              } else {
                playOpen();
              }
              setOpenWork(!openWork);
            }}
          >
            {openWork ? (
              <AiOutlineCaretDown className={styles.iconButtons} />
            ) : (
              <AiOutlineCaretRight className={styles.iconButtons} />
            )}

            <p className={styles.title}>Work Experience</p>
          </div>
          <div hidden={!openWork}>
            {workDetails.map((work) => {
              return (
                <div className={styles.jobBlock}>
                  <p className={styles.subHeader}>
                    {work.Company} ({work.Year})
                  </p>
                  <div className={styles.techStack}>
                    {work.TechStack.map((tech) => {
                      return (
                        <div
                          className={styles.tech}
                          onMouseEnter={() => {
                            play();
                          }}
                          onMouseLeave={() => {
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
        <hr />

        <div className={styles.about}>
          <div
            className={styles.titleButton}
            onClick={() => {
              if (openAbout) {
                playClose();
              } else {
                playOpen();
              }
              setOpenAbout(!openAbout);
            }}
          >
            {openAbout ? (
              <AiOutlineCaretDown className={styles.iconButtons} />
            ) : (
              <AiOutlineCaretRight className={styles.iconButtons} />
            )}
            <p className={styles.title}>About Erika</p>
          </div>

          <div hidden={!openAbout}>
            <div className={styles.aboutContents}>
              <div>
                <p className={styles.subHeader}> Education </p>
                <p className={styles.uni}>
                  University of the Philippines, Los Banos
                </p>
                <p className={styles.course}>BS COMPUTER SCIENCE, 2015-2020</p>
              </div>
              <p className={styles.subHeader}> Extra Curricular Activities </p>
              {extraCurricularDetails.map((extra) => {
                return (
                  <div className={styles.extraCurricular}>
                    <p className={styles.uni}>{extra.Title}</p>
                    <p className={styles.course}>{extra.Association}</p>
                    <p className={styles.year}>{extra.Year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactBlock}>
            Say Hi!
            <div className={styles.links}>
              <a
                onMouseEnter={() => {
                  playBeep();
                }}
                href="mailto: erika.nepomuceno392@gmail.com"
              >
                <AiOutlineMail className={styles.iconButtons} />
              </a>
              <a
                onMouseEnter={() => {
                  playBeep();
                }}
                href="https://github.com/StrawbErika"
              >
                <AiFillGithub className={styles.iconButtons} />
              </a>
              <a
                onMouseEnter={() => {
                  playBeep();
                }}
                href="https://www.linkedin.com/in/eanepomuceno-392/"
              >
                <AiFillLinkedin className={styles.iconButtons} />
              </a>
            </div>
          </div>
          <div className={styles.contactBlock}>
            Resume:
            <a
              onMouseEnter={() => {
                playBeep();
              }}
              href={bop}
              download="NepomucenoResume.pdf"
            >
              <AiOutlineFileText className={styles.iconButtons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
