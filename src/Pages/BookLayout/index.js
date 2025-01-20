import { useState } from "react";
import book from "./../../Assets/flippage.mp3";

import styles from "./style.module.scss";
import { FlippingPages } from "flipping-pages";
import { Bookmark } from "../../Components/Bookmark";
import { TableOfContents } from "../TableOfContents";
import { TechLayout } from "../TechLayout";
import { WorkLayout } from "../WorkLayout";
import { ProjectsLayout } from "../ProjectsLayout";
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
  return (
    <div className={styles.bookLayout}>
      <button
        className={selected < 1 ? styles.hide : styles.directionButtons}
        disabled={selected < 1}
        onClick={back}
      >
        Back
      </button>

      <div className={styles.book}>
        <Bookmark
          icon={<AiOutlineFileText className={styles.iconButtons} />}
          link={book}
          downloadFlag
          page={selected}
          name="RESUME"
        />
        <Bookmark
          icon={<AiOutlineClockCircle className={styles.iconButtons} />}
          link={"?tldr=true"}
          page={selected}
          name="TLDR?"
        />

        <div className={styles.pages}>
          <FlippingPages
            direction="right-to-left"
            onSwipeEnd={setSelected}
            selected={selected}
            disableSwipe
          >
            {/* TODO: left is logo */}
            <Page Right={<TableOfContents setPage={setSelected} />} />
            <Page
              Left={<WorkLayout flag="left" />}
              Right={<WorkLayout flag="right" />}
            />
            <Page Left={<TechLayout />} Right={<ProjectsLayout />} />
            <Page Right={<TableOfContents setPage={setSelected} />} />
            <Page Right={<TableOfContents setPage={setSelected} />} />
          </FlippingPages>
        </div>
      </div>
      <button
        disabled={selected === 4}
        className={selected === 4 ? styles.hide : styles.directionButtons}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}
