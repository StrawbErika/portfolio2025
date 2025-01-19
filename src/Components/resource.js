export const IconDisplay = (sound, Component, link, download) => {
  return download ? (
    <a
      onMouseEnter={() => {
        sound();
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
      }}
      href={link}
    >
      {Component}
    </a>
  );
};
