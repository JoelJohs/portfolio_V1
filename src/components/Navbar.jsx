import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Navbar = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActive(section);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-40 transition-transform ${
          isScrolled
            ? "-translate-x-full md:-translate-y-full"
            : "translate-x-0"
        }`}
      >
        <ul className="flex justify-center md:justify-center p-5">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="md:mx-5 mx-3">
              <a
                href="#"
                className={active === section ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault(); // Previene la recarga de página
                  handleScrollToSection(section);
                }}
              >
                {t(`navbar.${section}`)} {/* Use translation */}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed top-4 left-4 md:top-10 md:left-8 transition-opacity ${
          isScrolled ? "opacity-100" : "opacity-0"
        } ${isMenuOpen ? "hidden" : "block"}`}
      >
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full shadow-md z-40"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <nav className="navbar fixed top-0 left-0 w-full z-40">
            <ul
              className="flex flex-col md:flex-row md:justify-center items-center p-5"
              onClick={(e) => e.stopPropagation()}
            >
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section} className="my-5 md:mx-5 md:my-0">
                  <a
                    href="#"
                    className={active === section ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(section);
                      toggleMenu(); // Cerrar el menú después de hacer clic
                    }}
                  >
                    {t(`navbar.${section}`)} {/* Use translation */}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
