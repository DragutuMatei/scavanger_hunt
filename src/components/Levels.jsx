import React, { useEffect } from "react";
function Levels({ level }) {
  useEffect(() => {
    const elems = document.querySelectorAll(".pct");
    for (let i = 0; i < level; i++) {
      elems[i].classList.add("gata");
    }
  }, []);
  return (
    <div className="levels">
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
      <div className="pct"></div>
    </div>
  );
}

export default Levels;
