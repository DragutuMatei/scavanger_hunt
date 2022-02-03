import React, { useEffect, useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

let se = false;
function Meduza() {
  const [seUita, setSeUita] = useState(false);
  const [src, setSrc] = useState("/images/medusa_ok.png");
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
      rezv();
      if (gata) {
        clearInterval(joc);
      }
    }, 6000);
  }, []);

  const rezv = () => {
    setTimeout(() => {
      setSrc("/images/medusa_ok.png");
      se = true;
      console.log(se);
    }, adaSecundeleAleaRandom(1000, 3000));

    setTimeout(() => {
      setSrc("/images/medusa.png");
      se = false;
      console.log(se);
    }, adaSecundeleAleaRandom(2500, 4000));
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
      <Help
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus qui, unde aperiam sunt facilis veniam quasi reiciendis deserunt voluptatum quae iste quia ad eveniet corrupti blanditiis excepturi exercitationem maiores?"
        }
      />
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
