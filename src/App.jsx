
import Navbar from "./components/Navbar";
import Me from "./pages/Me";
import Fun from "./pages/Fun";
import Work from "./pages/Work";
import CaLamTo from "./pages/CaLamTo";
import NguoiViet from "./pages/NguoiViet";
import TrapToTap from "./pages/TrapToTap";
import DrawToStar from "./pages/DrawToStar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/calamto" element={<CaLamTo />} />
        <Route path="/nguoiviet" element={<NguoiViet />} />
        <Route path="/traptotap" element={<TrapToTap />} />
        <Route path="/drawtostar" element={<DrawToStar />} />
        <Route path="/work" element={<Work />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </Router>
  );
}

export default App;
