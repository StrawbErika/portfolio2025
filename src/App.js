import { useState } from "react";
import styles from "./style.module.scss";
import book from "./Assets/flippage.mp3";
import bookImg from "./Assets/book.png";
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
        <div className={showPage ? styles.hide : styles.buttonAnimation}>
          <div className={showPage ? styles.hide : styles.star}></div>

          <img
            onClick={() => {
              play();
              setOpen(true);

              setTimeout(() => {
                setShowPage(true);
              }, 1000);
            }}
            src={bookImg}
            className={open ? styles.bookHide : styles.book}
            alt={"book"}
          />
        </div>
      )}
      {showPage && <BookLayout />}
    </div>
  );
}

export default App;
