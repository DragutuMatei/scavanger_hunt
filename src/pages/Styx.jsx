import React from "react";

function Styx() {
  const click = (asta, e) => {
    const indexRandom = Math.floor(Math.random() * 3);

    const element = asta.target;

    if (indexRandom === e) {
      const parent = element.parentElement;
      const el = document.createElement("img");
      el.setAttribute("src", "/images/coin.png");
      el.setAttribute("class", "coin");
      parent.append(el);
    }

    element.classList.add("active");
    setTimeout(() => {
      element.classList.remove("active");
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

      <div className="joc">
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
