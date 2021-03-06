import React, { useEffect, useState } from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

function Styx() {
  const [indexRandom, setIndexRandom] = useState(Math.floor(Math.random() * 3));

  const [globalClasses, setClasses] = useState("joc ");

  useEffect(() => {
    console.log(window.sessionStorage.getItem("asdasdasd"));
    if (
      window.sessionStorage.getItem("asdasdasd") === "true" ||
      window.sessionStorage.getItem("hgjjfhj") === "true"
    ) {
      setClasses("joc not");

      console.log("pt ca ai dat refresh");
      setTimeout(() => {
        setClasses("joc");
        window.sessionStorage.removeItem("asdasdasd");
        window.localStorage.removeItem("hgjjfhj");
      }, 120000);
    }

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

    tst(e);

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

  const tst = (e) => {
    setTimeout(() => {
      if (indexRandom !== e) {
        alert(
          "Ai ales gresit! Trebuie sa astepti 2 minute ca sa poti sa reincerci!"
        );
        setClasses("joc not");

        window.sessionStorage.setItem("asdasdasd", "true");
        window.localStorage.setItem("hgjjfhj", "true");

        setTimeout(() => {
          setClasses("joc");

          window.sessionStorage.removeItem("asdasdasd");
          window.localStorage.removeItem("hgjjfhj");
        }, 120000);
      }
    }, 400);
  };

  return (
    <div className="styx">
      <Levels level={4} />
      <Help
       text={
      "Da click pe unul dintre cele 3 pahare ??i ??ncearc??-??i norocul in a g??si moneda sub acesta. Dac?? nu ai nimerit, po??i ap??sa din nou pe ce pahar consideri, dar abia dup?? ce a??tep??i cele 2 minute"}/>
      <div className="txtBox">
        <p>
          E??ti la un pas de a intra ??n lumea celor vii, singurul obstacol ce te
          mai desparte este R??ul Styx, care poate fi trecut doar cu ajutorul
          b??tr??nului barcagiu, Charon. Ajuns la barcagiu, acesta ????i spune c??
          poate s?? te treac?? r??ul doar dac?? ??i oferi o moned??, ??n caz contrar va
          trebui s?? a??tepti o sut?? de ani p??n?? po??i ??ncerca iar. Misiune ta este
          s?? g??se??ti o moneda sub pahare, dac?? nu o g??se??ti va trebui s?? a??tep??i
          dou?? minute p??n?? po??i ??ncerca iar.
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
