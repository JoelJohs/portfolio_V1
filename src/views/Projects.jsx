const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col p-10 md:px-20 md:py-20"
    >
      <h1 className="mb-10 text-center">Projects</h1>
      <p className="leading-relaxed text-center mb-10">
        Here you can find some of the projects I have worked on. Each project
        showcases different skills and technologies I have used.
      </p>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="items-center">
          {/* Placeholder for project cards */}
          <div className="flex items-center ">
            <p>Project 1</p>
          </div>
          <div className="flex items-center ">
            <p>Project 2</p>
          </div>
          <div className="flex items-center">
            <p>Project 3</p>
          </div>
          <div className="flex items-center">
            <p>Project 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
