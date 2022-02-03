import React, { useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

let test = [];
let incercari = 0;

function Hefaistos() {
  const click = (i) => {
    const elem = document.querySelectorAll(".sabie")[i];
    elem.classList.add("active");
    test.push(i);
    console.log(test);
    if (test.length === 2) {
      setTimeout(() => {
        if (
          (test[0] === 1 && test[1] === 4) ||
          (test[0] === 4 && test[1] === 1)
        ) {
          alert("Sabia e completa, iar urmatoarea proba te asteapta");
          window.location.pathname = "/icarus";
        } else {
          incercari++;
          if (incercari < 3)
            alert(
              `Nu ai nimerit partile corecte din sabie! Mai ai ${
                3 - incercari
              } incercari`
            );
          if (incercari === 3) {
            alert(
              "Nu mai ai incercari! Trebuie sa te intorci de la inceputul calatoriei deoarece Minotaurul te-a infrant!"
            );
            window.location.pathname = "/tartar";
          }
          document
            .querySelectorAll(".sabie")
            [test[0]].classList.remove("active");
          document
            .querySelectorAll(".sabie")
            [test[1]].classList.remove("active");
          test = [];
        }
      }, 700);
    }
  };

  return (
    <div className="hefaistos">
      <Levels level={7} />
      <Help
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus qui, unde aperiam sunt facilis veniam quasi reiciendis deserunt voluptatum quae iste quia ad eveniet corrupti blanditiis excepturi exercitationem maiores?"
        }
      />
      <div className="txtBox">
        <p>
          Odată ajuns în Creta, te afli in Knossos, la palatul regelui Minos,
          unde îl observi pe Tezeu, tânărul care ar fi trebuit să-l ucidă pe
          Minotaurul aflat în labirintul de sub castel. Te apropii de el și-l
          intrebi ce s-a întâmplat, iar acesta îți spune că sabia oferită de
          Ariadna pentru a învinge bestia este distrusă. Ajută-l pe acesta să
          unească piesele potrivite pentru a reface sabia. Dacă greșești de 3
          ori, vei lua călătoria de la început.
        </p>
      </div>
      <div className="joc">
        <img
          src="/images/Sabia2/laba.png"
          className="sabie"
          onClick={() => click(0)}
          alt=""
        />
        <img
          src="/images/Sabia3/cotor.png"
          className="sabie"
          onClick={() => click(1)}
          alt=""
        />
        <img
          src="/images/Sabia1/laba.png"
          className="sabie"
          onClick={() => click(2)}
          alt=""
        />
        <img
          src="/images/Sabia1/cotor.png"
          className="sabie"
          onClick={() => click(3)}
          alt=""
        />
        <img
          src="/images/Sabia3/laba.png"
          className="sabie"
          onClick={() => click(4)}
          alt=""
        />

        <img
          src="/images/Sabia2/cotor.png"
          className="sabie"
          onClick={() => click(5)}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hefaistos;
