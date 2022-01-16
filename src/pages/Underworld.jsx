import React, { useEffect, useRef, useState } from "react";

let incercari = 1;
function Underworld() {
  const txt = useRef();

  const test = (i) => {
    console.log(i);
    if (i === 6) {
      alert(
        "Bravo! Ai nimerit rodia corecta si hades te lasa sa iesi din Infern"
      );
      window.location.pathname = "/cerber";
    } else {
      if (incercari !== 3) {
        alert(`Raspuns gresit! Mai ${3 - incercari} incercari`);
      } else {
        incercari = 1;
        alert("Nu mai ai incercari! Incepe din nou");
        window.location.reload(false);
      }
      incercari++;
    }
  };

  useEffect(() => {
    const txt = document.querySelector(".p");
    const imgs = document.querySelectorAll(".imgs");

    const a = txt.getBoundingClientRect();

    console.log(a.x, a.y, a.x + a.width);

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
        console.log("cosmin.x", i);
      } while (
        (cosmin.x + 100 > txt_x_inital && cosmin.x + 100 < txt_x_final) ||
        (cosmin.y + 100 > txt_y_inital && cosmin.y + 100 < txt_y_final)
      );
    }
  }, []);

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
      <p ref={txt} className="p">
        Acum că ai ieșit din Tartat, înca te afli în lumea de apoi, tărâm condus
        de Hades și Persefona, după cum știți Persefona a rămas blocată în lumea
        de apoi după ce a mâncat un sâmbure de rodie, fiind obligată să își
        petreaca 6 luni din an în Infern. Misiunea ta este să găsești arbustul
        de rodie din această livadă doar din trei încercări.
      </p>
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
        style={{ left: coorRandom().x, top: coorRandom().y, backgroundColor: "red", }}
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
