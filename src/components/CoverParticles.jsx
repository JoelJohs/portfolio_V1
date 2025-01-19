import { useEffect, useMemo, useState, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ThemeContext } from "../context/themeContext";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

  const { Theme } = useContext(ThemeContext);
  const particleColor = Theme === "light" ? "#363636" : "#b164ff";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.4,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          bounce: false,
          random: true,
          speed: 1,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [particleColor]
  );

  if (init) {
    return (
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default CoverParticles;
