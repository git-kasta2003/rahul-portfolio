function Projects() {
  const projects = [
    {
      id: "01",
      name: "ROSSEYE",
      description: "Fashion E-commerce Website",
      technology: ["React", "Tailwind CSS", "JavaScript"],
      category: "E-COMMERCE",
      symbol: "R",
    },
    {
      id: "02",
      name: "WOODAMORE",
      description: "Furniture Shopping Website",
      technology: ["React", "CSS", "JavaScript"],
      category: "E-COMMERCE",
      symbol: "W",
    },
    {
      id: "03",
      name: "Expense Tracker",
      description: "Personal Expense Management",
      technology: ["React", "JavaScript", "CSS"],
      category: "WEB APPLICATION",
      symbol: "₹",
    },
    {
      id: "04",
      name: "Movie Explorer",
      description: "Movie Discovery Website",
      technology: ["React", "JavaScript", "CSS"],
      category: "WEB APPLICATION",
      symbol: "M",
    },
  ];

  return (
    <main className="projects-section">

      {/* BACKGROUND */}
      <div className="projects-bg-grid"></div>
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* HEADING */}
        <div className="projects-heading">

          <p className="projects-eyebrow">
            <span></span> MY CREATIVE WORK
          </p>

          <h1>
            MY <span>PROJECTS.</span>
          </h1>

          <p>
            A collection of projects where I turn ideas
            into functional and creative web experiences.
          </p>

          <div className="projects-heading-line"></div>

        </div>

        {/* PROJECT COUNT */}
        <div className="projects-overview">
          <div>
            <span className="projects-overview-number">04</span>
            <span className="projects-overview-label">
              TOTAL PROJECTS
            </span>
          </div>

          <p>SELECTED WORK / 2026</p>
        </div>

        {/* PROJECT CARDS */}
        <div className="projects-grid">

          {projects.map(function (project) {
            return (
              <div className="project-card" key={project.id}>

                {/* TOP */}
                <div className="project-card-top">
                  <span>PROJECT / {project.id}</span>
                  <span className="project-card-category">
                    {project.category}
                  </span>
                </div>

                {/* VISUAL */}
                <div className="project-visual">

                  <div className="project-visual-circle"></div>

                  <span className="project-visual-number">
                    {project.id}
                  </span>

                  <div className="project-visual-center">
                    {project.symbol}
                  </div>

                  <div className="project-visual-label">
                    {project.name}
                  </div>

                  <div className="project-visual-line"></div>

                </div>

                {/* CONTENT */}
                <div className="project-card-content">

                  <h2>{project.name}</h2>

                  <p>{project.description}</p>

                  <div className="project-tech-list">
                    {project.technology.map(function (tech) {
                      return (
                        <span key={tech}>{tech}</span>
                      );
                    })}
                  </div>

                </div>

                {/* BOTTOM */}
                <div className="project-card-bottom">
                  <span>PERSONAL PROJECT</span>
                  <span className="project-card-arrow">↗</span>
                </div>

                <div className="project-card-shine"></div>

              </div>
            );
          })}

        </div>

        {/* FOOTER */}
        <div className="projects-bottom">
          <span>IDEAS</span>
          <i></i>
          <span>DESIGN</span>
          <i></i>
          <span>DEVELOPMENT</span>
        </div>

      </div>
    </main>
  );
}

export default Projects;