import styles from "./style.module.scss";

export function TableOfContents({ setPage }) {
  const Header = ({ title, pageNumber }) => {
    return (
      <div className={styles.header}>
        <div
          onClick={() => {
            setPage(pageNumber);
          }}
          className={styles.title}
        >
          {title}
        </div>
        <div className={styles.pageNum} pageNum>
          {pageNumber}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.contents}>
      <div className={styles.tableOfContents}>TABLE OF CONTENTS</div>
      <hr />
      <div className={styles.headers}>
        <Header title="Work Experience" pageNumber={1} />
        <Header title="Projects & Technology" pageNumber={2} />
        <Header title="About Erika" pageNumber={3} />
        <Header title="Contact" pageNumber={4} />
      </div>
    </div>
  );
}
