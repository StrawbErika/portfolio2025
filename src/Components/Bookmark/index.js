import bookmark from "./../../Assets/hoverBookmark.mp3";

import styles from "./style.module.scss";
import useSound from "use-sound";

import "flipping-pages/dist/style.css";

// TODO: be cool to be draggable
export function Bookmark({ icon, link, downloadFlag, page, name }) {
  const [play] = useSound(bookmark, { volume: 0.1 });
  return (
    <div className={page === 4 && styles.bookmarkRight}>
      <a
        onMouseEnter={() => {
          play();
        }}
        style={downloadFlag ? { marginTop: "10%" } : {}}
        className={page > 0 && page < 4 ? styles.hide : styles.bookmark}
        href={link}
      >
        {icon}
        {!(page > 0 && page < 4) && <div className={styles.title}>{name}</div>}
      </a>
    </div>
  );
}
