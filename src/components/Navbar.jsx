import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="navbar fixed top-2 left-0 w-full  z-40">
      <ul className="flex justify-center p-5">
        <li className="mx-5">
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li className="mx-5">
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li className="mx-5">
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
        </li>
        <li className="mx-5">
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
