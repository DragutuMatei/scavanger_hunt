import React, { useEffect, useRef, useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";
import Timer from "../components/Timer";

let incercari = 1;
function Underworld() {
  const txt = useRef();
  const [gata, setGata] = useState(false);
  const [index, setIndex] = useState(Math.floor(Math.random() * 15));
  console.log(index);

  const test = (i) => {
    i--;
    if (i === index) {
      alert(
        "Bravo! Ai nimerit rodia corecta si Hades te lasa sa iesi din Infern"
      );
      window.location.pathname = "/cerber";
    } else {
      if (incercari !== 3) {
        alert(`Raspuns gresit! Mai ai ${3 - incercari} incercari`);
      } else {
        incercari = 1;
        alert("Nu mai ai incercari! Incepe din nou");
        window.location.reload();
      }
      incercari++;
    }
  };

  useEffect(() => {
    const txt = document.querySelector(".p");
    const imgs = document.querySelectorAll(".imgs");

    const a = txt.getBoundingClientRect();

    const txt_x_inital = a.x;
    const txt_x_final = a.x + a.width;

    const txt_y_inital = a.y;
    const txt_y_final = a.y + a.height;

    for (let i = 0; i < imgs.length; i++) {
      let cosmin = imgs[i].getBoundingClientRect();

      do {
        imgs[i].style.left = coorRandom().x + "px";
        imgs[i].style.top = coorRandom().y + "px";
        cosmin = imgs[i].getBoundingClientRect();
      } while (
        (cosmin.x + 100 > txt_x_inital && cosmin.x + 100 < txt_x_final) ||
        (cosmin.y + 100 > txt_y_inital && cosmin.y + 100 < txt_y_final)
      );
    }

    imgs[index].style.zIndex = 999;
    // imgs[index].style.background = "red";
  }, []);

  useEffect(() => {
    if (gata) {
      alert("Timpul a expirat");
      window.location.reload();
    }
  }, [gata]);

  const coorRandom = () => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    do {
      x = Math.random() * window.innerWidth;
    } while (x > window.innerWidth - 120);

    do {
      y = Math.random() * window.innerHeight;
    } while (y > window.innerHeight - 120);

    return {
      x: x,
      y: y,
    };
  };

  return (
    <div className="underworld">
      <Levels level={2} />
<Help  text={
        "In timpul alocat ai la dispozi??ie 3 ??ncerc??ri sa dai click pe rodiile potrivite ??i sa treci la urm??toarea etapa. Dac?? ai r??mas f??r?? secunde sau ??ncerc??ri, trebuie sa iei de la cap??t doar aceasta proba, nu toat?? v??n??toarea."} />
      <div className="timerContainer">
        {
          <Timer
            hours={0}
            minutes={0}
            seconds={20}
            fct={(x) => {
              if (x) setGata(true);
            }}
          />
        }
      </div>
      <div className="txtBox">
        <p ref={txt} className="p">
          Acum c?? ai ie??it din Tartar, ??nca te afli ??n lumea de apoi, t??r??m
          condus de Hades ??i Persefona. Dup?? cum ??ti??i, Persefona a r??mas blocat??
          ??n lumea de apoi dup?? ce a m??ncat un s??mbure de rodie, fiind obligat??
          s?? ????i petreaca 6 luni din an ??n Infern. Misiunea ta este s?? g??se??ti
          arbustul de rodie din aceast?? livad?? doar din trei ??ncerc??ri.
        </p>
      </div>

      <img
        className="imgs"
        onClick={() => test(1)}
        src="/images/rodie.png"
        style={{
          left: window.innerWidth,
          top: coorRandom().y,
        }}
        alt=""
      />
      <img
        className="imgs"
        onClick={() => test(2)}
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        alt=""
      />
      <img
        className="imgs"
        onClick={() => test(3)}
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        onClick={() => test(4)}
        style={{ left: coorRandom().x, top: coorRandom().y }}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(5)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(6)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(7)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(8)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(9)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(10)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(11)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(12)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(13)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(14)}
        alt=""
      />
      <img
        className="imgs"
        src="/images/rodie.png"
        style={{ left: coorRandom().x, top: coorRandom().y }}
        onClick={() => test(15)}
        alt=""
      />
    </div>
  );
}

export default Underworld;
