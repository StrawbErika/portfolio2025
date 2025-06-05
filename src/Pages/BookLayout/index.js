import { useState } from "react";
import book from "./../../Assets/flippage.mp3";
import logo from "./../../Assets/embossed.png";
import resume from "./../../Assets/Nepomuceno_Resume.pdf";
import bye from "./../../Assets/bye1.png";
import arrow from "./../../Assets/arrow.png";
import mail from "./../../Assets/mail.webp";
import styles from "./style.module.scss";
import { FlippingPages } from "flipping-pages";
import { Bookmark } from "../../Components/Bookmark";
import { TableOfContents } from "../TableOfContents";
import { TechLayout } from "../TechLayout";
import { WorkLayout } from "../WorkLayout";
import { ProjectsLayout } from "../ProjectsLayout";
import { AboutLayout } from "../AboutLayout";
import { ExtracurricularLayout } from "../ExtracurricularLayout";
import useSound from "use-sound";
import { AiOutlineFileText, AiOutlineClockCircle } from "react-icons/ai";

import "flipping-pages/dist/style.css";

export function BookLayout() {
  const [selected, setSelected] = useState(0);
  const [play] = useSound(book, { volume: 1 });

  const back = () => {
    play();
    setSelected((selected) => Math.max(selected - 1, 0));
  };
  const next = () => {
    play();
    setSelected((selected) => Math.min(selected + 1, 4));
  };

  const Page = ({ Left, Right }) => {
    return (
      <div className={styles.page}>
        <div className={styles.left}>{Left}</div>
        <div className={styles.right}>{Right}</div>
      </div>
    );
  };
  const LogoEnd = () => {
    return (
      <div className={styles.logoContainerEnd}>
        <div className={styles.words}>
          It was super nice of you to drop by, I'm sure Erika enjoyed your stay!
          Make sure you keep in touch, ok?
        </div>
        <a href="mailto: erika.nepomuceno392@gmail.com" className={styles.link}>
          <img className={styles.mail} src={mail} alt="logo" />
        </a>
      </div>
    );
  };

  const Logo = () => {
    return (
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.text}> © Published 2025</div>
      </div>
    );
  };
  const Photo = () => {
    return (
      <div className={styles.photoContainer}>
        <div className={styles.text}> She hopes to hear from you soon!</div>

        <img className={styles.photoContainer} src={bye} alt="bye" />
      </div>
    );
  };
  return (
    <div className={styles.bookLayout}>
      {/* TODO: button carats */}
      <div
        className={selected < 1 ? styles.hide : styles.directionButtons}
        disabled={selected < 1}
        onClick={back}
      >
        <img className={styles.arrowLeft} src={arrow} alt="bye" />
      </div>

      <div className={styles.book}>
        <Bookmark
          icon={<AiOutlineFileText className={styles.iconButtons} />}
          link={resume}
          downloadFlag
          page={selected}
          name="RESUME"
        />
        <Bookmark
          icon={<AiOutlineClockCircle className={styles.iconButtons} />}
          link={"?tldr=true"}
          page={selected}
          name="Simplified"
        />

        <div className={styles.pages}>
          <FlippingPages
            direction="right-to-left"
            onSwipeEnd={setSelected}
            selected={selected}
            disableSwipe
          >
            {/* TODO: left is logo */}
            <Page
              Left={<Logo />}
              Right={<TableOfContents setPage={setSelected} />}
            />
            <Page
              Left={<WorkLayout flag="left" />}
              Right={<WorkLayout flag="right" />}
            />
            <Page Left={<TechLayout />} Right={<ProjectsLayout />} />
            <Page Left={<AboutLayout />} Right={<ExtracurricularLayout />} />
            <Page Left={<LogoEnd />} Right={<Photo />} />
          </FlippingPages>
        </div>
      </div>
      <div
        disabled={selected === 4}
        className={selected === 4 ? styles.hide : styles.directionButtons}
        onClick={next}
      >
        <img className={styles.arrowRight} src={arrow} alt="bye" />
      </div>
    </div>
  );
}
