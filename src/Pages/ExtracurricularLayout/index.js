import styles from "./style.module.scss";
import { extraCurricularDetails } from "./constants";

export function ExtracurricularLayout() {
  return (
    <div className={styles.extra}>
      <div className={styles.title}>EXTRACURRICULAR ACTIVITIES</div>
      <div className={styles.subtitle}>
        University of the Philippines, Los Banos{" "}
      </div>
      <div className={styles.subscript}>BS Computer Science</div>
      <div className={styles.contents}>
        {extraCurricularDetails.map((extra) => {
          return (
            <div className={styles.row}>
              <div className={styles.yearTitle}>{extra.Title}</div>
              <div className={styles.course}>{extra.Association}</div>
              <div className={styles.year}>{extra.Year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
