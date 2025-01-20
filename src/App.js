import { useState } from "react";
import styles from "./style.module.scss";
import book from "./Assets/flippage.mp3";
import { TLDR } from "./Pages/TLDR";
import { BookLayout } from "./Pages/BookLayout";
import useSound from "use-sound";

// TODO: Book slide out
function App() {
  const [play] = useSound(book, { volume: 1 });
  const [open, setOpen] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const tldrFlag = window.location.search;

  return (
    <div className={styles.appHeader}>
      {tldrFlag ? (
        <TLDR />
      ) : (
        <div
          className={open ? styles.slideOut : styles.book}
          onClick={() => {
            play();
            setOpen(true);

            setTimeout(() => {
              setShowPage(true);
            }, 500);
          }}
        >
          hello
          {/* TODO: animated div under the button that rotates and pulses */}
        </div>
      )}
      {showPage && <BookLayout />}
    </div>
  );
}

export default App;
