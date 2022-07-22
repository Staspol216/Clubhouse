import { css } from "@emotion/react";

const link = css({
  fontWeight: 600,
  fontSize: 15,
  color: "#4f6fa5",
});
const container = css({
  margin: "0 auto",
  width: 1240,
});
const field = css({
  minWidth: 100,
  height: 65,
  background: "#fff",
  border: "1px sloid #e3e3e3",
  boxSizing: "border-box",
  borderRadius: 20,
  padding: "0 25px",
  fontSize: 20,
});
const grid = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
});
const loader = css({
  display: "inline-block",
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  border: "0.3rem solid rgba(#b1aa97, 0.3)",
  borderTopColor: "#b1aa97",
  animation: "0.5s spin infinite linear",
});

export { link, container, field, grid, loader };
