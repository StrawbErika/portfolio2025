export const IconDisplay = ({ sound, Component, link, download, set }) => {
  return download ? (
    <a
      onMouseEnter={() => {
        sound();
        set();
      }}
      href={link}
      download={download}
    >
      {Component}
    </a>
  ) : (
    <a
      onMouseEnter={() => {
        sound();
        set();
      }}
      href={link}
    >
      {Component}
    </a>
  );
};
