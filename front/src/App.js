import {Routes, Route} from "react-router-dom";
import './App.scss';

import Home from "./pages/Home";
import FicheLogement from "./pages/Fiche-Logement";
import Page404 from "./pages/404";
import APropos from "./pages/A-Propos";

import Headers from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Headers/>
        <Routes>
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
