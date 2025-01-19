import CTAButton from "../components/buttons/CTAButton";
import EmailButton from "../components/buttons/EmailButton";

const Home = () => {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="mb-5 md:mb-0 relative mx-5 flex justify-center md:justify-start">
        <div className="image-container">
          <img
            src="/yo_2.jpg"
            alt="Imagen de Joel Johs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:mx-5 flex justify-center md:justify-start">
        <div>
          <h1 className="mb-2 text-center md:text-left">
            Hola, Soy <span>Joel Johs</span>
          </h1>
          <h2 className="mb-2 text-center md:text-left">
            Desarrollador Fullstack{" "}
          </h2>
          <p className="mb-4 text-center md:text-left">
            Enfocado mayormente al backend
          </p>
          <div className="flex justify-center md:justify-start">
            <EmailButton email={"jojohersa21@gmail.com"} />
          </div>
          <div className="flex gap-4 my-4 justify-center md:justify-start">
            <CTAButton
              label="Ve Mis Proyectos"
              href="#projects"
              variant="primary"
            />
            <CTAButton label="Contactame" href="#contact" variant="secondary" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
