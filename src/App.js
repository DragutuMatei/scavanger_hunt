import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cerber from "./pages/Cerber";
import FirstPage from "./pages/FirstPage";
import Tartar from "./pages/Tartar";
import Underworld from "./pages/Underworld";
import Styx from "./pages/Styx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/tartar" element={<Tartar />} />
        <Route path="/underworld" element={<Underworld />} />
        <Route path="/cerber" element={<Cerber />} />
        <Route path="/styx" element={<Styx />} />
      </Routes>
    </BrowserRouter>
  );
}
//amira e o prajitoare
export default App;
