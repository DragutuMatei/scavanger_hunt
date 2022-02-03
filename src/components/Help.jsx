import React, { useState } from "react";

function Help({ text }) {
  const [width, setWidth] = useState(0);
  const cl = () => {
    if (width == 0) {
      setWidth("400px");
    } else {
      setWidth(0);
    }
  };

  return (
    <div className="help">
      <div
        className="icon"
        onClick={() => {
          cl();
        }}
      >
        <i className="fas fa-question-circle"></i>
      </div>
      <div
        className="text"
        style={{ width: width, padding: width != 0 ? "20px" : 0 }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Help;
