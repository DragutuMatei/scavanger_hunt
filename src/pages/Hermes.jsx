import React from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

let blackjackGame = {
  you: {
    scoreSpan: "#scoruTau",
    div: ".cardsY",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealerScore",
    div: ".cardsD",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

function Hermes() {
  const blackjackHit = () => {
    if (!blackjackGame.isStand) {
      let card = randomCard();
      showCard(YOU, card);
      updateScore(card, YOU);
      showScore(YOU);
      console.log(YOU.score);
      blackjackGame.turnsOver = true;
    }
  };

  const blackjackDeal = () => {
    if (blackjackGame.turnsOver) {
      blackjackGame.isStand = false;
      let imgs = document.querySelector(".cardsY").querySelectorAll("img");

      for (let i = 0; i < imgs.length; i++) {
        imgs[i].remove();
      }
      imgs = document.querySelector(".cardsD").querySelectorAll("img");

      for (let i = 0; i < imgs.length; i++) {
        imgs[i].remove();
      }

      YOU.score = 0;
      DEALER.score = 0;
      document.querySelector(YOU.scoreSpan).innerHTML = 0;
      document.querySelector(DEALER.scoreSpan).innerHTML = 0;
    }
  };

  const showCard = (activePlayer, card) => {
    if (activePlayer.score <= 21) {
      let cardImage = document.createElement("img");
      cardImage.src = "/images/" + card + ".png";
      document.querySelector(activePlayer.div).appendChild(cardImage);
    }
  };

  const randomCard = () => {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame.cards[randomIndex];
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateScore = (card, player) => {
    if (card === "A") {
      if (player.score + 11 > 21) {
        player.score += blackjackGame.cardsMap[card][0];
      } else {
        player.score += blackjackGame.cardsMap[card][1];
      }
    } else player.score += blackjackGame.cardsMap[card];
  };

  const showScore = (player) => {
    if (player.score > 21) {
      document.querySelector(player.scoreSpan).innerHTML = "BUSTED";
    } else document.querySelector(player.scoreSpan).innerHTML = player.score;
  };

  const stand = async () => {
    blackjackGame.isStand = true;
    while (DEALER.score < 16 && blackjackGame.isStand) {
      let card = randomCard();
      showCard(DEALER, card);
      updateScore(card, DEALER);
      showScore(DEALER);
      await sleep(1000);
    }

    blackjackGame.turnsOver = true;
    let winner = computerWinner();
    if (winner === YOU) {
      alert("Felicitari! Ai completat Scavenger Hunt, iar Zeus te asteapta");
      window.location.pathname = "/olimp";
    } else if (winner === DEALER) {
      alert("Hermes a invins, asa ca esti nevoit sa reincepi tot jocul!");
      window.location.pathname = "/tartar";
    } else {
      alert(
        "A fost egalitate, asa ca mai primesti o sansa, apasa pe deal si vei reincepe nivelul!"
      );
    }
  };

  const computerWinner = () => {
    let winner;
    if (YOU.score <= 21) {
      if (YOU.score > DEALER.score || DEALER.score > 21) {
        winner = YOU;
      } else if (YOU.score < DEALER.score || YOU.score > 21) {
        winner = DEALER;
      } else if (YOU.score === DEALER.score) {
        winner = "draw";
        console.log("draw");
      }
    } else if (YOU.score > 21 && DEALER.score <= 21) {
      winner = DEALER;
    } else if (YOU.score > 21 && DEALER.score > 21) {
      winner = "draw";
      console.log("draw");
    }

    return winner;
  };
  return (
    <div className="hermes">
      <Levels level={9} />
      <Help  text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus qui, unde aperiam sunt facilis veniam quasi reiciendis deserunt voluptatum quae iste quia ad eveniet corrupti blanditiis excepturi exercitationem maiores?"
        }/>
      <div className="txtBox">
        <p>
          Felicitări! Ai ajuns în împărăția Cerurilor, tot ce te mai desparte de
          final este Hermes, mâna dreaptă a lui Zeus. În mitologia greacă, pe
          langă mesagerul zeităților, Hermes este considerat si zeul jocurilor
          de noroc. Acesta te va lăsa să-l vezi pe Zeus doar dacă îl învigi la
          un joc de Blackjack.
        </p>
      </div>
      <div className="joc">
        <div className="up">
          <div className="cutie">
            <h2>
              You: <span id="scoruTau">0</span>{" "}
            </h2>
            <div className="cardsY"></div>
          </div>
          <div className="cutie">
            <h2>
              Hermes: <span id="dealerScore">0</span>{" "}
            </h2>
            <div className="cardsD"></div>
          </div>
        </div>
        <div className="down">
          <div
            className="button"
            onClick={() => {
              blackjackHit();
            }}
          >
            Hit
          </div>
          <div
            className="button"
            onClick={() => {
              stand();
            }}
          >
            Stand
          </div>
          <div
            className="button"
            onClick={() => {
              blackjackDeal();
            }}
          >
            Deal
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hermes;
