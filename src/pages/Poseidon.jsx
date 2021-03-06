import React, { useEffect, useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";
import Timer from "../components/Timer";
let secsundeFrt;
function Poseidon() {
  const [gata, setGata] = useState(false);
  const [s, setTime] = useState();

  const coorRandom = () => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    do {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    } while (
      (y > window.innerHeight - 120 && x > window.innerWidth - 120) ||
      (x < 500 && y < 500)
    );

    // do {
    // } while ();

    return {
      x: x,
      y: y,
    };
  };

  const [images, setImages] = useState([]);
  let [html, setHtml] = useState([
    <img
      src="/images/cal.png"
      className="imgs"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      onClick={() => click(0)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(1)}
      alt=""
    />,
    <img
      style={{ left: coorRandom().x, top: coorRandom().y }}
      src="/images/cal.png"
      className="imgs"
      onClick={() => click(2)}
      alt=""
    />,
    <img
      style={{ left: coorRandom().x, top: coorRandom().y }}
      src="/images/cal.png"
      className="imgs"
      onClick={() => click(3)}
      alt=""
    />,
    <img
      style={{ left: coorRandom().x, top: coorRandom().y }}
      src="/images/cal.png"
      className="imgs"
      onClick={() => click(4)}
      alt=""
    />,
    <img
      style={{ left: coorRandom().x, top: coorRandom().y }}
      src="/images/cal.png"
      className="imgs"
      onClick={() => click(5)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(6)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(7)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(8)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(9)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(10)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(11)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(12)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(13)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(14)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(15)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(16)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(17)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(18)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(19)}
      alt=""
    />,
    <img
      src="/images/cal.png"
      style={{ left: coorRandom().x, top: coorRandom().y }}
      className="imgs"
      onClick={() => click(20)}
      alt=""
    />,
  ]);

  const click = (i) => {
    console.log(i);
    setImages((old) => [...old, [i]]);

    html.pop();

    console.log(html);
    remap();
    if (html.length === 0) {
      alert(
        "Bravo! Ai prins tot caii lui Poseidon si acesta te va duce in Creta!"
      );
      window.location.pathname = "/hefaistos";
    }
  };
  useEffect(() => {
    const time = setInterval(() => {
      console.log(secsundeFrt);
      if (secsundeFrt !== 0) {
        remap();
      } else {
        clearInterval(time);
        alert("Timpul a expirat, trebuie sa incerci din nou!");
        window.location.reload();
      }
    }, 1000);
  }, []);

  const remap = () => {
    const txt = document.querySelector("p");
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
  };

  return (
    <div className="poseidon">
      <Levels level={6} />
      <Help text={
        "Da click c??t de repede po??i pe c??lu??ii de mare pentru a-i prinde la calea??ca. Odat?? selectat un c??lu??, num??rul lor se va mic??ora pentru urm??toarea a??ezare. ??ncearc?? sa ii prinzi pe to??i c??t mai repede pentru a nu lua nivelul de la cap??t." } />
      <div className="txtBox">
        <p>
          Odata plecat din templul Atenei, misiunea ta continu?? spre insula
          Creta, dar pentru a ajunge acolo trebuie s?? treci mai ??nt??i Marea Egee,
          iar ??notul nu este o op??iune. Cum Poseidon mai st?? pe st??nci privind
          templul pierdut ??n b??t??lia cu Atena, te observ?? pe plaj?? ??i ????i ofer??
          un t??rg, iar ??n schimb el te va duce ??n Creta. Tot ce trebuie s?? faci
          e s??-l aju??i s?? ????i prind?? cei 21 de cai la calea??c??.
        </p>
      </div>

      <div className="timerContainer">
        <Timer
          seconds={20}
          fct={() => setGata(true)}
          adaSec={(sec) => {
            secsundeFrt = sec - 1;
          }}
        />
      </div>
      <div className="joc">
        {html.map((htm) => (
          <>{htm}</>
        ))}
        {/* <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(0)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(1)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(2)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(3)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(4)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(5)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(6)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(7)}
          alt=""
        />
        <img
          src="/images/cal.png"
          className="imgs"
          onClick={() => click(8)}
          alt=""
        /> */}
        {/* <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" />
        <img src="/images/cal.png" className="imgs" alt="" /> */}
      </div>
    </div>
  );
}

export default Poseidon;
