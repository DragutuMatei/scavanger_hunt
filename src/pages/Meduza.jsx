import React, { useEffect, useState } from "react";
import Levels from "../components/Levels";

let se = false;
function Meduza() {
  const [seUita, setSeUita] = useState(false);
  const [src, setSrc] = useState("/images/medusa.png");
  const [trecut, setAtrecut] = useState(false);
  const [gata, setGata] = useState(false);
  const adaSecundeleAleaRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
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
      // setSeUita(false);
      // se = false;
      // console.log(se, "Asd");
      rezv();
      // setSeUita((old) => (old = true));
      // setSeUita(true);
      // se = true;
      // console.log(se);
      if (gata) {
        clearInterval(joc);
      }
    }, 6000);

    console.log("gata coaie ca bag pula");
  }, []);

  const rezv = () => {
    // const seuita = setInterval(() => {
    //   setSrc("/images/cerber.png");
    //   clearInterval(seuita);
    // }, 2000);

    setTimeout(() => {
      setSrc("/images/cerber.png");
      se = true;
      console.log(se);
    }, adaSecundeleAleaRandom(1000, 3000));

    setTimeout(() => {
      setSrc("/images/medusa.png");
      se = false;
      console.log(se);
    }, adaSecundeleAleaRandom(2500, 4000));

    // const seuita2 = setInterval(() => {
    //   setSrc("/images/medusa.png");
    //   clearInterval(seuita2);
    // }, 4000);
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
      alert("aia e");
      hero.style.left = 0 + "px";
    }

    const finish = document.querySelector(".right");

    const heroB = hero.getBoundingClientRect();

    const left = heroB.left;
    const right = left + hero.getBoundingClientRect().width;
    if (finish.getBoundingClientRect().x <= heroB.x) {
      alert("gata jocu");
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

      <div className="txtBox">
        <p>
          Ai ajuns la templul zeiței Atena, dar ai grija deoarece Medusa este în
          apropiere, pentru a trece de aceasta și a te apropia de vârful
          Muntelui Olimp trebuie să treci pe langă ea făra ca aceasta să te
          observe, altfel te va împietri.
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
