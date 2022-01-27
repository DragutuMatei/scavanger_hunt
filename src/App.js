import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cerber from "./pages/Cerber";
import FirstPage from "./pages/FirstPage";
import Tartar from "./pages/Tartar";
import Underworld from "./pages/Underworld";
import Styx from "./pages/Styx";
import Meduza from "./pages/Meduza";
import Poseidon from "./pages/Poseidon";
import Hefaistos from "./pages/Hefaistos";
import Icarus from "./pages/Icarus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/tartar" element={<Tartar />} />
        <Route path="/underworld" element={<Underworld />} />
        <Route path="/cerber" element={<Cerber />} />
        <Route path="/styx" element={<Styx />} />
        <Route path="/meduza" element={<Meduza />} />
        <Route path="/poseidon" element={<Poseidon />} />
        <Route path="/hefaistos" element={<Hefaistos />} />
        <Route path="/icarus" element={<Icarus />} />
      </Routes>
    </BrowserRouter>
  );
}
//amira e o prajitoare
export default App;
