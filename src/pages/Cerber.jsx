import React from "react";

function Cerber() {
  const click = () => {
    alert(
      "Momentan il tii pe cerber ocupat cu osul pe care l-ai gasit! Poti trece la urmatorul nivel"
    );
    window.location.pathname = "/styx";
  };

  return (
    <div className="cerber">
      <p>
        Ai reușit să o ajuți pe Persefona să strângă rodiile, zeița a decis să
        te îndrume spre ieșirea din Infern care este păzită de căinele
        credincios a lui Hades, Cerber. Cerber este câinele monstruos cu trei
        capete, pe spate are o mulțime de șerpi agresivi, iar coada lui este tot
        un șarpe. Acesta permite doar sufletelor morților să intre, dar mai ales
        veghează ca nimeni să nu mai iasă, împiedicându-le întoarcerea în lumea
        celor vii. Pentru a reuși, totuși să intri in lumea celor vii trebuie
        să-i distragi atenția cu un os. Găsește osul din imagine și pleacă de
        acolo, cât timp Cerberul este distras.
      </p>
      <img src="/images/osul.png" onClick={click} alt="" />
    </div>
  );
}

export default Cerber;
