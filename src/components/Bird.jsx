import React from "react";

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 60;
  const birdHeight = "auto";

  return (
    <img
      src="/images/hero.png"
      style={{
        position: "absolute",
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}
    />
  );
};

export default Bird;
