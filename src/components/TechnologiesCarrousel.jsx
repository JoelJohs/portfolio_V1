import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import technologies from "../data/technologies";

const TechnologiesCarrousel = () => {
  const listRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const scrollSpeed = 1;

  useEffect(() => {
    let req;
    const scrollLoop = () => {
      if (!isHovered) {
        const listWidth = listRef.current.scrollWidth / 2;
        let newPos =
          scrollPos +
          (mouseX < window.innerWidth / 2 ? -scrollSpeed : scrollSpeed);
        if (newPos < 0) newPos += listWidth;
        if (newPos > listWidth) newPos -= listWidth;
        setScrollPos(newPos);
      }
      req = requestAnimationFrame(scrollLoop);
    };
    req = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(req);
  }, [scrollPos, mouseX, isHovered]);

  const handleMouseMove = (e) => setMouseX(e.clientX);
  const scrollLeft = () => setScrollPos((pos) => pos - 200);
  const scrollRight = () => setScrollPos((pos) => pos + 200);

  return (
    <div
      className="card skills-carousel relative overflow-hidden my-8 bg-gradient-to-r from-[#1a1025] via-[#9d5cd1] to-[#1a1025] py-8 px-4 rounded-[15px]"
      onMouseMove={handleMouseMove}
    >
      <button
        className="absolute left-2 bg-black bg-opacity-50 p-2 rounded text-white z-10 top-1/2 -translate-y-1/2"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div
        ref={listRef}
        className="carousel-track flex items-center"
        style={{ transform: `translateX(-${scrollPos}px)` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className="group relative w-24 mx-4 flex items-center justify-center text-center"
          >
            <FontAwesomeIcon
              icon={tech.icon}
              className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110"
              style={{
                color:
                  hoveredItem === index
                    ? tech.hoverColor
                    : "var(--text-primary)",
              }}
            />
            <p
              className="absolute font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ bottom: "-2rem" }}
            >
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      <button
        className="absolute right-2 bg-black bg-opacity-50 p-2 rounded text-white z-10 top-1/2 -translate-y-1/2"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default TechnologiesCarrousel;
