const Navbar = () => {
  return (
    <nav className="navbar fixed top-2 left-0 w-full  z-40">
      <ul className="flex justify-center p-5">
        <li className="mx-5">
          <a href="#home">Home</a>
        </li>
        <li className="mx-5">
          <a href="#about">About</a>
        </li>
        <li className="mx-5">
          <a href="#projects">Projects</a>
        </li>
        <li className="mx-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
