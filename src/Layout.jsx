import Navbar from "./components/Navbar";
import BottomScreenButtons from "./components/BottomScreenButtons";
import Home from "./views/Home";
import CoverParticles from "./components/CoverParticles";

const Layout = () => {
  return (
    <>
      <CoverParticles />

      {/* Componentes fijos */}
      <div className="relative">
        <Navbar />
        <Home />
      </div>

      {/* Componentes flotantes */}
      <BottomScreenButtons />
    </>
  );
};

export default Layout;
