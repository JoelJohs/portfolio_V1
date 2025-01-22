import Navbar from "./components/Navbar";
import BottomScreenButtons from "./components/BottomScreenButtons";
import Home from "./views/Home";
import CoverParticles from "./components/CoverParticles";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const Layout = () => {
  return (
    <>
      <CoverParticles />

      {/* Componentes fijos */}
      <div className="relative">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

      {/* Componentes flotantes */}
      <BottomScreenButtons />
    </>
  );
};

export default Layout;
