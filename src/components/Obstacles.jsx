import React from "react";

const Obstacles = ({
  color,
  obstacleWidth,
  obstacleHeight,
  randomBottom,
  gap,
  obstaclesLeft,
}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: 500,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      ></div>
    </>
  );
};

export default Obstacles;
