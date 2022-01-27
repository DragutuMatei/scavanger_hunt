import React, { Component, useEffect, useState } from "react";
import "./try.css";
import Levels from "../components/Levels";
import Timer from "../components/Timer";
let secsundeFrt;

const Icarus = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const bird = document.querySelector(".bird");
    const gameDisplay = document.querySelector(".game-container");
    const ground = document.querySelector(".ground-moving");

    let birdLeft = 220;
    let birdBottom = 365;
    let gravity = 3;
    let isGameOver = false;
    let gap = 445;

    function startGame() {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + "px";
      bird.style.left = birdLeft + "px";

      if (!isGameOver && secsundeFrt === 0) {
        console.log("asd", );
        isGameOver = true;
        document.removeEventListener("keyup", control);
        alert("bine frt");
        window.location.pathname = "/hermes";
      }
    }

    let gameTimerId;
    if (start) {
      gameTimerId = setInterval(startGame, 20);
    }

    if (!start) {
      bird.style.display = "none";
    } else {
      bird.style.display = "flex";
    }
    function control(e) {
      if (e.keyCode === 32) {
        jump();
      }
    }

    function jump() {
      if (birdBottom < 500) birdBottom += 50;
      bird.style.bottom = birdBottom + "px";
      console.log(bird.style.bottom);
    }
    document.addEventListener("keyup", control);

    function generateObstacle() {
      let obstacleLeft = 500;
      let randomHeight = Math.random() * 90;
      let obstacleBottom = randomHeight;
      const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      if (!isGameOver) {
        obstacle.classList.add("obstacle");
        topObstacle.classList.add("topObstacle");
      }
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";

      function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";

        if (obstacleLeft === -60) {
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom <
              obstacleBottom + obstacle.getBoundingClientRect().height ||
              birdBottom > obstacleBottom + gap - 50)) ||
          birdBottom === 1
        ) {
          console.log(obstacleBottom + gap - 50, " obstacle");
          gameOver();
          clearInterval(timerId);
        }
      }
      let timerId = setInterval(moveObstacle, 20);
      if (!isGameOver) setTimeout(generateObstacle, 3000);
    }
    if (start) {
      generateObstacle();
    }

    function gameOver() {
      clearInterval(gameTimerId);
      isGameOver = true;
      document.removeEventListener("keyup", control);
      ground.classList.add("ground");
      ground.classList.remove("ground-moving");
      if (window.confirm("Ai pierdut")) {
        window.location.reload();
      }
    }

   
  }, [start]);

  return (
    <div className="icarus">
      <Levels level={8} />
      <div className="txtBox">
        <p>
          Acum că l-ai ajutat pe Tezeu să-l învigă pe Minotaur ai reușit să urci
          in legendarul turn, unde Icar si tatal lui, Daedalus, au fost închiși
          de regele Minos. Pentru a reuși să ajungi în Impărăția Cerurilor
          trebuie să îmbraci aripile de ceară construite de Daedalus și să te
          înalți la ceruri.
        </p>
        <div
          className="button"
          onClick={() => {
            setStart(true);
          }}
        >
          Start
        </div>
      </div>
      <div className="timerContainer">
        {start ? (
          <Timer
            seconds={60}
            adaSec={(sec) => {
              secsundeFrt = sec - 1;
            }}
          />
        ) : (
          <div className="timer">60</div>
        )}
      </div>
      <div className="border-left"></div>
      <div className="game-container">
        <div className="border-top"></div>
        {/* <div className="sky"> */}
        <div className="bird"></div>
        {/* </div> */}
      </div>
      <div className="ground-container">
        <div className="ground-moving"></div>
      </div>
      <div className="border-right"></div>
    </div>
  );
};

export default Icarus;
