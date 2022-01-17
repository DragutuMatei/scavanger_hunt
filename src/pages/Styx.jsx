import React, { useEffect, useState } from "react";

function Styx() {
  const [indexRandom, setIndexRandom] = useState(Math.floor(Math.random() * 3));

  const [globalClasses, setClasses] = useState("joc ");

  useEffect(() => {
    const parent = document.querySelectorAll(".cup");

    const el = document.createElement("img");
    el.setAttribute("src", "/images/coin.png");
    el.setAttribute("class", "coin");
    el.setAttribute("id", "coins");
    parent[indexRandom].append(el);
  }, []);

  //taci drq
  //ma doare la coaie de el
  const click = async (asta, e) => {
    const element = asta.target;

    element.classList.add("active");

    if (indexRandom !== e) {
      setClasses("joc not");

      setTimeout(() => {
        setClasses("joc");
      }, 120000);

      console.log("gata coaie");
    }

    setTimeout(() => {
      element.classList.remove("active");
      setTimeout(() => {
        if (indexRandom === e) {
          alert(
            "Bravo! L-ai invins pe Charon si acesta te va scoate din Invern."
          );
          window.location.pathname = "/meduza";
        }
      }, 400);
    }, 1500);
  };

  return (
    <div className="styx">
      <div className="txt">
        <p>
          Ești la un pas de a intra în lumea celor vii, singurul obstacol ce te
          mai desparte este Râul Styx, care poate fi trecut doar cu ajutorul
          bătrânului barcagiu, Charon. Ajuns la barcagiu acesta îți spune că
          poate să te treacă râul doar dacă îi oferi o monedă, în caz contrar va
          trebui să aștepti o sută de ani până poți încerca iar. Misiune ta este
          să găsești o moneda sub potire, dacă nu o găsești va trebui să aștepți
          două minute până poți încerca iar.
        </p>
      </div>

      <div className={globalClasses}>
        <div className="cup">
          <img src="/images/cup.png" onClick={(e) => click(e, 0)} alt="" />
        </div>
        <div className="cup">
          <img src="/images/cup.png" onClick={(e) => click(e, 1)} alt="" />
        </div>
        <div className="cup">
          <img src="/images/cup.png" onClick={(e) => click(e, 2)} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Styx;
