import React, { useEffect, useState } from "react";
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
      <div className="txtBox">
        <p>
          Odata plecat din templul Atenei misiunea ta continuă spre insula
          Creta, dar ca să ajungi acolo trebuie să treci mai întâi Marea Egee,
          iar înotul nu este o opțiune. Cum Poseidon mai stă pe stănci privind
          templul pierdut în bătălia cu Atena, te observă pe plajă și îți oferă
          un târg, iar în schimb el te va duce în Creta. Tot ce trebuie să faci
          e să-l ajuți să își prindă cei nouă cai la caleașcă.
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
