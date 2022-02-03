import React from "react";
import Help from "../components/Help";
import Levels from "../components/Levels";

function Cerber() {
  const click = () => {
    alert(
      "Momentan il tii pe cerber ocupat cu osul pe care l-ai gasit! Poti trece la urmatorul nivel"
    );
    window.location.pathname = "/styx";
  };

  return (
    <div className="cerber">
      <Levels level={3} />
      <Help
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus qui, unde aperiam sunt facilis veniam quasi reiciendis deserunt voluptatum quae iste quia ad eveniet corrupti blanditiis excepturi exercitationem maiores?"
        }
      />
      <div className="txtBox">
        <p>
          Ai reușit să o ajuți pe Persefona să strângă rodiile, iar zeița a
          decis să te îndrume spre ieșirea din Infern, care este păzită de
          căinele credincios al lui Hades, Cerber. Cerber este câinele monstruos
          cu trei capete, pe spate are o mulțime de șerpi agresivi, iar coada
          lui este tot un șarpe. Acesta permite doar sufletelor morților să
          intre, dar mai ales veghează ca nimeni să nu mai iasă, împiedicându-le
          întoarcerea în lumea celor vii. Pentru a reuși totuși să intri in
          lumea celor vii, trebuie să-i distragi atenția cu un os. Găsește osul
          din imagine și pleacă de acolo, cât timp Cerberul este distras.
        </p>
      </div>
      <img src="/images/osul.png" onClick={click} alt="" />
    </div>
  );
}

export default Cerber;
