import styles from "./style.module.scss";
import { workDetailsRight, workDetailsLeft } from "./constants";

export function WorkLayout({ flag }) {
  const WorkInstance = ({ work }) => {
    return (
      <div className={styles.work}>
        <img className={styles.logo} src={work.Logo} alt={work.Company} />
        <div>
          <div className={styles.subHeader}>{work.Title}</div>
          <div className={styles.company}>
            {work.Company} ({work.Year})
          </div>
          <div className={styles.techStack}>
            {work.TechStack.map((tech, i) => {
              return (
                <div key={i} className={styles.tech}>
                  {tech},
                </div>
              );
            })}
          </div>
          <div className={styles.descriptions}>
            {work.Descriptions.map((desc, i) => {
              return <li key={i}>{desc}</li>;
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.contents}>
      <div className={styles.tableOfContents}>
        {flag === "left" ? "WORK" : "EXPERIENCE"}
      </div>
      <div className={styles.workExperience}>
        {flag === "left"
          ? workDetailsLeft.map((work, i) => {
              return <WorkInstance key={i} work={work} />;
            })
          : workDetailsRight.map((work, i) => {
              return <WorkInstance key={i} work={work} />;
            })}
      </div>
    </div>
  );
}
