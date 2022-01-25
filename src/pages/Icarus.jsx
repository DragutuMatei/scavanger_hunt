import React, { useEffect } from "react";
import Levels from "../components/Levels";

function Icarus() {
  useEffect(() => {
    const context = document.getElementById("c").getContext("2d");
    const bird = new Image();
    bird.src = "/images/hero.png";
    let birdX = 0;
    let birdDY = 0;
    let score = 0;
    let bestScore = 0;
    let interval = 24;
    let birdSize = 24;
    let pipeWidth = 24;
    let topPipeBottomY = 24;
    let birdY = 200;
    let pipeGap = 200;
    let canvasSize = 400;
    let pipeX = 400;

    window.onkeydown = (e) => {
      if (e.which === 32) {
        console.log("sd");
        birdDY += 20;
      }
    };

    setInterval(() => {
      context.fillStyle = "skyblue";
      context.fillRect(0, 0, 500, 500); // Draw sky
      birdY -= 0.5;
      birdDY -= 0.5; // Gravity
      context.drawImage(bird, birdX, birdY, birdSize * (524 / 374), birdSize); // Draw bird
      context.fillStyle = "green";
      pipeX -= 8;
      if (pipeX < -pipeWidth) {
        pipeX = canvasSize;
        topPipeBottomY = pipeGap * Math.random();
      }
      context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Draw top pipe
      context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe
      context.fillStyle = "black";
      context.fillText(score++, 9, 25); // Increase and draw score
      bestScore = bestScore < score ? score : bestScore; // New best score?
      context.fillText(`Best: ${bestScore}`, 9, 50); // Draw best score
      if (
        birdY < topPipeBottomY ||
        (birdY > topPipeBottomY + pipeGap && pipeX < birdSize * (524 / 374)) || // Bird hit pipe?
        birdY > canvasSize // Bird falls off screen
      ) {
      }
      birdDY = 0;
      birdY = 200;
      pipeX = canvasSize;
      score = 0; // Bird died
    }, interval);
  }, []);
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
      </div>
      <canvas id="c" width="400" height="400"></canvas>
    </div>
  );
}

export default Icarus;
