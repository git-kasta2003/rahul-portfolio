function Skills() {
  const skills = [
    {
      id: "01",
      name: "HTML",
      category: "FRONTEND",
      description: "Web Structure",
      level: "01",
      symbol: "</>",
    },
    {
      id: "02",
      name: "CSS",
      category: "FRONTEND",
      description: "Web Styling",
      level: "02",
      symbol: "{ }",
    },
    {
      id: "03",
      name: "JavaScript",
      category: "LANGUAGE",
      description: "Interactivity",
      level: "03",
      symbol: "JS",
    },
    {
      id: "04",
      name: "React.js",
      category: "FRAMEWORK",
      description: "UI Development",
      level: "04",
      symbol: "⚛",
    },
    {
      id: "05",
      name: "Java",
      category: "BACKEND",
      description: "Programming",
      level: "05",
      symbol: "J",
    },
    {
      id: "06",
      name: "MySQL",
      category: "DATABASE",
      description: "Data Management",
      level: "06",
      symbol: "DB",
    },
    {
      id: "07",
      name: "Tailwind CSS",
      category: "UI STYLING",
      description: "Responsive Design",
      level: "07",
      symbol: "TW",
    },
  ];

  return (
    <section className="skills-section">

      <div className="skills-bg-grid"></div>
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="skills-container">

        {/* HEADING */}
        <div className="skills-heading">
          <p className="skills-eyebrow">
            <span></span> WHAT I KNOW
          </p>

          <h1>
            MY <span>SKILLS.</span>
          </h1>

          <p>
            Technologies I am learning and using to build
            modern and responsive web applications.
          </p>

          <div className="skills-heading-line"></div>
        </div>

        {/* SKILL CARDS */}
        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skills-card" key={skill.id}>

              <div className="skills-card-top">
                <span>SKILL / {skill.id}</span>
                <span className="skills-card-number">
                  {skill.level}
                </span>
              </div>

              <div className="skills-icon">
                {skill.symbol}
              </div>

              <div className="skills-card-content">
                <span className="skills-category">
                  {skill.category}
                </span>

                <h2>{skill.name}</h2>

                <p>{skill.description}</p>
              </div>

              <div className="skills-card-bottom">
                <span>TECHNOLOGY</span>
                <span className="skills-arrow">↗</span>
              </div>

              <div className="skills-card-shine"></div>

            </div>
          ))}

        </div>

        {/* BOTTOM TEXT */}
        <div className="skills-bottom">
          <span>CONTINUOUS LEARNING</span>
          <div></div>
          <span>CONTINUOUS GROWTH</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;