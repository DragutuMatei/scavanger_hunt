import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  useEffect(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

  }, []);

  return (
    <div className="firstPage">
      <div className="firsttxt">
        <h1>Bine ati venit la Scavanger Hunt organizat de Thobor</h1>
        <Link className="button start" to="tartar">
          Start
        </Link>
        <h1 className="amira">Amira e o prajitoare</h1>
      </div>
    </div>
  );
}
//amira e o prajitoare
export default FirstPage;
