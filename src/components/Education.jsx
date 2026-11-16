function Education() {
  const educationData = [
    {
      id: "01",
      date: "JULY 2018 — MARCH 2020",
      title: "Higher Secondary (12th)",
      institute: "Anmol Higher Secondary School",
      category: "HIGHER SECONDARY",
      description: "Completed Higher Secondary education.",
      type: "COMPLETED",
    },
    {
      id: "02",
      date: "BATCH 2020 - 2024",
      title: "B.Tech — Computer Science",
      institute: "College of Engineering in Bhubaneshwar",
      category: "ENGINEERING",
      description: "Bachelor of Technology in Computer Science.",
      score: "7.85",
      type: "COMPLETED",
    },
    {
      id: "03",
      date: "FEBRUARY 2026 — PRESENT",
      title: "Full Stack Java Development",
      institute: "SkySkill Academy",
      category: "PROFESSIONAL TRAINING",
      description: "Learning modern technologies to build full-stack applications.",
      skills: ["Java", "JavaScript", "React.js", "MySQL"],
      type: "CURRENTLY LEARNING",
    },
  ];

  return (
    <section className="education-section">
      <div className="education-bg-grid"></div>
      <div className="education-glow education-glow-one"></div>
      <div className="education-glow education-glow-two"></div>

      <div className="education-container">

        {/* HEADING */}
        <div className="education-heading">
          <p className="education-eyebrow">
            <span></span> MY JOURNEY
          </p>

          <h1>
            EDUCATION<span>.</span>
          </h1>

          <p className="education-subtitle">
            My academic background and professional learning journey.
          </p>

          <div className="education-heading-line"></div>
        </div>

        {/* TIMELINE */}
        <div className="education-timeline">

          <div className="education-timeline-line"></div>

          {educationData.map((item, index) => (
            <div
              className={`education-item ${
                index % 2 === 0 ? "education-left" : "education-right"
              }`}
              key={item.id}
            >
              {/* TIMELINE DOT */}
              <div className="education-dot">
                <span></span>
              </div>

              {/* CARD */}
              <div className="education-card">

                <div className="education-card-top">
                  <span className="education-number">
                    {item.id} / 03
                  </span>

                  <span className={`education-status ${
                    item.type === "CURRENTLY LEARNING"
                      ? "education-active"
                      : ""
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="education-card-icon">
                  {item.id === "01" && "01"}
                  {item.id === "02" && "02"}
                  {item.id === "03" && "03"}
                </div>

                <p className="education-date">
                  {item.date}
                </p>

                <h2>{item.title}</h2>

                <h3>{item.institute}</h3>

                <p className="education-description">
                  {item.description}
                </p>

                <div className="education-card-bottom">

                  <span className="education-category">
                    {item.category}
                  </span>

                  {item.score && (
                    <div className="education-score">
                      <span>CGPA</span>
                      <strong>{item.score}</strong>
                    </div>
                  )}

                </div>

                {item.skills && (
                  <div className="education-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}

                <div className="education-card-shine"></div>

              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="education-bottom">
          <span>LEARN</span>
          <i></i>
          <span>IMPROVE</span>
          <i></i>
          <span>ACHIEVE</span>
        </div>

      </div>
    </section>
  );
}

export default Education;