import React, { useEffect, useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

let se = false;
let startMeduza, endMeduza;
function Meduza() {
  const [seUita, setSeUita] = useState(false);
  const [src, setSrc] = useState("/images/medusa_ok.png");
  const [trecut, setAtrecut] = useState(false);
  const [gata, setGata] = useState(false);
  const adaSecundeleAleaRandom = (min, max) => {
    min = Math.ceil(min) * 1000;
    max = Math.floor(max) * 1000;
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  };
  useEffect(() => {
    window.onkeydown = press;

    // while (true) {
    //   console.log("asd");
    //   setTimeout(() => {}, 1000);
    // }

    console.log("aicea");

    const joc = setInterval(() => {
      rezv();
      if (gata) {
        clearInterval(joc);
      }
    }, 9000);
  }, []);

  const rezv = () => {
    let i = adaSecundeleAleaRandom(2, 4);
    console.log(i);
    let k = adaSecundeleAleaRandom(3, 6);
    console.log(k);

    startMeduza = setTimeout(() => {
      setSrc("/images/medusa_ok.png");
      se = false;
      console.log(se);

      endMeduza = setTimeout(() => {
        setSrc("/images/medusa.png");
        se = true;
        console.log(se);
      }, 4000);
    }, 5000);
  };

  const press = (e) => {
    const hero = document.querySelector(".hero");
    console.log(seUita);
    if (
      (e.key == "ArrowRight" ||
        e.key == "d" ||
        e.key == "ArrowLeft" ||
        e.key == "a") &&
      se
    ) {
      alert("Meduza te-a vazut si trebuie sa o iei de la capat.");
      hero.style.left = 0 + "px";
      se = false;
      clearTimeout(startMeduza);
      clearTimeout(endMeduza);
      setGata(false);

      setTimeout(() => setSrc("/images/medusa_ok.png"), 100);

      const joc = setInterval(() => {
        rezv();
        if (gata) {
          clearInterval(joc);
        }
      }, 6000);
    }

    const finish = document.querySelector(".right");

    const heroB = hero.getBoundingClientRect();

    const left = heroB.left;
    const right = left + hero.getBoundingClientRect().width;
    if (finish.getBoundingClientRect().x <= heroB.x) {
      alert("Ai reusit sa treci neobservat in etapa urmatoare.");
      window.location.pathname = "/poseidon";
    }

    if (
      (e.key == "ArrowRight" || e.key == "d") &&
      right < window.innerWidth - 0.5
    ) {
      hero.style.left = left + 0.5 + "px";
    }
    if ((e.key == "ArrowLeft" || e.key == "a") && left != 0 && left > 0) {
      hero.style.left = left - 0.5 + "px";
    }
  };

  return (  
    <div className="meduza">
      <Levels level={5} />

      <Help text="Tine apăsat pe săgeata din dreapta pentru a te deplasa in cealaltă parte a ecranului, dar ai grija sa te opresti de fiecare data când Medusa se întoarce cu fata la tine pentru a nu începe nivelul de la capăt." />

      <div className="txtBox">
        <p>
          Ai ajuns la templul zeiței Atena, dar ai grija deoarece Medusa este în
          apropiere. Pentru a trece de aceasta și a te apropia de vârful
          Muntelui Olimp trebuie să treci pe langă ea făra să te observe, altfel
          te va împietri.
        </p>
      </div>
      <div className="joculet">
        <img src="/images/coloana.svg" alt="" className="coloana left" />
        <img className="meduzaPers" src={src} />
        <img src="/images/hero.png" alt="" className="hero" />
        <img src="/images/coloana.svg" alt="" className="coloana right" />
      </div>
    </div>
  );
}

export default Meduza;
