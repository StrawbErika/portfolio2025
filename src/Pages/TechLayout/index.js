import styles from "./style.module.scss";
import { tech1, tech2, tech3 } from "./constants";

export function TechLayout() {
  const TechInstance = ({ tech, small }) => {
    return (
      <div className={small ? styles.smallTech : styles.tech}>
        <img
          className={small ? styles.small : styles.logo}
          src={tech.Logo}
          alt={tech.Tech}
        />
        <div className={styles.name}>{tech.Tech}</div>
      </div>
    );
  };
  return (
    <div className={styles.contents}>
      <div className={styles.title}>TECHNOLOGY</div>
      <div className={styles.subtitle}>
        Erika's go to technology when developing projects
      </div>
      <div className={styles.row}>
        {tech1.map((t, i) => {
          return <TechInstance key={i} tech={t} />;
        })}
      </div>
      <div className={styles.row}>
        {tech2.map((t, i) => {
          return <TechInstance key={i} tech={t} />;
        })}
      </div>

      <div className={styles.subtitle}>
        With experience developing on the following technology
      </div>
      <div className={styles.row}>
        {tech3.map((t, i) => {
          return <TechInstance key={i} tech={t} small />;
        })}
      </div>
    </div>
  );
}
