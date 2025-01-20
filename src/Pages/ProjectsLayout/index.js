import { useState } from "react";
import styles from "./style.module.scss";
import { project } from "./constants";
import useSound from "use-sound";
import click from "./../../Assets/click.mp3";
export function ProjectsLayout() {
  const [flip, setFlip] = useState([]);
  const [play] = useSound(click, { volume: 1 });

  // TODO: card flip??
  const ProjectInstance = ({ title, tech, description, picture, index }) => {
    const exists = flip.filter((i) => i === index).length > 0;
    return exists ? (
      <div
        className={styles.card}
        onClick={() => {
          setFlip(flip.filter((i) => i !== index));
          play();
        }}
      >
        <div>{title}</div>
        <div className={styles.tech}>
          {tech.reduce((acc, currentValue) => {
            return acc + ", " + currentValue;
          })}
        </div>
        <div className={styles.desc}>{description}</div>
      </div>
    ) : (
      <div
        className={styles.card}
        onClick={() => {
          setFlip(flip.concat(index));
          play();
        }}
      >
        <img className={styles.logo} src={picture} alt={title} />
        <div>{title}</div>
      </div>
    );
  };
  return (
    <div className={styles.contents}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.subtitle}>
        Some fun projects I've done over the years!
      </div>
      <div className={styles.row}>
        {project.map((proj, i) => {
          return (
            <ProjectInstance
              title={proj.Title}
              tech={proj.Tech}
              index={i}
              picture={proj.Picture}
              description={proj.Descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
