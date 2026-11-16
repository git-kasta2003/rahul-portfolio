function About() {
  const aboutCards = [
    {
      number: "01",
      title: "Who I Am",
      subtitle: "THE DEVELOPER",
      description:
        "A passionate learner interested in technology, coding and creating modern websites.",
      symbol: "</>",
    },
    {
      number: "02",
      title: "My Skills",
      subtitle: "THE TECHNOLOGIES",
      description:
        "Learning HTML, CSS, JavaScript, React, Tailwind CSS, Java and MySQL.",
      symbol: "{ }",
    },
    {
      number: "03",
      title: "My Goal",
      subtitle: "THE VISION",
      description:
        "To become a skilled Full Stack Java Developer and build useful real-world applications.",
      symbol: "01",
    },
  ];

  return (
    <section className="about-section">

      {/* Background Effects */}

      <div className="about-background">
        <div className="about-grid"></div>
        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        <span className="about-floating-symbol symbol-about-one">
          {"{ }"}
        </span>

        <span className="about-floating-symbol symbol-about-two">
          {"</>"}
        </span>

        <span className="about-floating-symbol symbol-about-three">
          01
        </span>
      </div>


      <div className="about-container">

        {/* Heading */}

        <div className="about-heading">

          <p className="about-eyebrow">
            <span></span>
            GET TO KNOW ME
          </p>

          <h2>
            About <span>Me.</span>
          </h2>

          <div className="about-heading-line"></div>

        </div>


        {/* Main Introduction Card */}

        <div className="about-main-card">

          <div className="about-card-number">
            ABOUT / 001
          </div>

          <div className="about-main-content">

            <div className="about-intro">

              <p className="about-small-title">
                HELLO, I'M RAHUL KASTA
              </p>

              <h3>
                Aspiring Full Stack
                <br />
                <span>Java Developer.</span>
              </h3>

              <p className="about-description">
                I am an aspiring Full Stack Java Developer who enjoys
                creating clean and responsive websites. I am learning
                Java, JavaScript, React, Tailwind CSS and MySQL.
                My goal is to build useful projects and grow as a
                software developer.
              </p>

              <div className="about-tech-list">
                <span>JAVA</span>
                <span>REACT</span>
                <span>JAVASCRIPT</span>
                <span>MYSQL</span>
              </div>

            </div>


            {/* 3D Developer Visual */}

            <div className="about-visual">

              <div className="about-visual-ring ring-one"></div>
              <div className="about-visual-ring ring-two"></div>
              <div className="about-visual-ring ring-three"></div>

              <div className="about-visual-center">
                <span>RK</span>
                <small>DEVELOPER</small>
              </div>

              <div className="about-visual-code code-top">
                {"<code />"}
              </div>

              <div className="about-visual-code code-bottom">
                {"{ JAVA }"}
              </div>

            </div>

          </div>

          <div className="about-card-footer">
            <span>PASSION FOR DEVELOPMENT</span>
            <span>BUILDING THE FUTURE ↗</span>
          </div>

        </div>


        {/* About Cards */}

        <div className="about-cards">

          {aboutCards.map(function (card) {
            return (

              <div className="about-info-card" key={card.number}>

                <div className="about-info-top">

                  <span>{card.number}.</span>

                  <div className="about-info-symbol">
                    {card.symbol}
                  </div>

                </div>

                <p className="about-info-subtitle">
                  {card.subtitle}
                </p>

                <h3>{card.title}</h3>

                <p className="about-info-description">
                  {card.description}
                </p>

                <div className="about-info-line"></div>

              </div>

            );
          })}

        </div>


        {/* Bottom Text */}

        <div className="about-bottom">

          <span className="about-bottom-line"></span>

          <p>
            LEARN <span>·</span> CREATE <span>·</span> GROW
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;