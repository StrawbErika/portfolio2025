import { useState } from "react";
import book from "./../../Assets/flippage.mp3";

import styles from "./style.module.scss";
import { FlippingPages } from "flipping-pages";
import { Bookmark } from "../../Components/Bookmark";
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
    setSelected((selected) => Math.min(selected + 1, 2));
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
            <div className={styles.page}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
            <div className={styles.page}>Page 2</div>
            <div className={styles.page}>Page 3</div>
          </FlippingPages>
        </div>
      </div>
      <button
        disabled={selected === 2}
        className={selected === 2 ? styles.hide : styles.directionButtons}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}
