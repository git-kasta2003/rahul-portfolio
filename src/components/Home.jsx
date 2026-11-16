import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const name = "Rahul Kasta.";
    let i = 0;

    const typing = setInterval(() => {
      setText(name.slice(0, i + 1));
      i++;

      if (i === name.length) {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  const codeSymbols = [
    { symbol: "</>", className: "symbol-one" },
    { symbol: "{ }", className: "symbol-two" },
    { symbol: "01", className: "symbol-three" },
    { symbol: "Java", className: "symbol-four" },
    { symbol: "React", className: "symbol-five" },
    { symbol: "( )", className: "symbol-six" },
  ];

  return (
    <section className="home-section">

      {/* 3D BACKGROUND */}

      <div className="home-background">

        <div className="home-grid"></div>

        <div className="home-glow home-glow-one"></div>
        <div className="home-glow home-glow-two"></div>

        {codeSymbols.map((item, index) => (
          <div
            key={index}
            className={`floating-code ${item.className}`}
          >
            {item.symbol}
          </div>
        ))}

        <div className="home-particle particle-one"></div>
        <div className="home-particle particle-two"></div>
        <div className="home-particle particle-three"></div>
        <div className="home-particle particle-four"></div>

      </div>


      {/* HOME CONTENT */}

      <div className="home-container">

        {/* LEFT CONTENT */}

        <div className="home-content">

          <p className="home-welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="home-title">
            {text.slice(0, 6)}
            <span>{text.slice(6)}</span>
            <span className="typing-cursor">|</span>
          </h1>

          <div className="developer-badge">
            <span className="status-dot"></span>
            Full Stack Java Developer
          </div>

          <p className="home-description">
            I am learning Full Stack Java Development and building
            modern websites using Java, JavaScript, React and Tailwind CSS.
            I love learning new technologies and creating clean user interfaces.
          </p>

          <div className="home-buttons">

            <a
              href="/Navy%20PDF%20Rahul.pdf"
              download="Navy PDF Rahul.pdf"
              className="home-btn primary-btn"
            >
              Download CV ↗
            </a>

            <Link
              to="/projects"
              className="home-btn secondary-btn"
            >
              View Projects →
            </Link>

          </div>

          <div className="home-bottom-line"></div>

        </div>


        {/* RIGHT 3D VISUAL */}

        <div className="home-visual">

          <div className="profile-3d-scene">

            {/* Orbit Rings */}

            <div className="profile-orbit orbit-one"></div>
            <div className="profile-orbit orbit-two"></div>
            <div className="profile-orbit orbit-three"></div>

            {/* Floating Code Card */}

            <div className="code-card">

              <div className="code-card-header">
                <span></span>
                <span></span>
                <span></span>
                <p>developer.js</p>
              </div>

              <div className="code-card-body">
                <p><span>01</span> const developer = {"{"}</p>
                <p><span>02</span> &nbsp; name: "Rahul",</p>
                <p><span>03</span> &nbsp; role: "Java Developer",</p>
                <p><span>04</span> &nbsp; passion: "Coding"</p>
                <p><span>05</span> {"}"}</p>
              </div>

            </div>


            {/* Profile Image */}

            <div className="profile-frame">

              <div className="profile-image-wrap">

                <img
                  src="/images.png"
                  alt="Rahul Kasta"
                  className="profile-image"
                />

              </div>

            </div>


            {/* Floating Labels */}

            <div className="tech-label label-java">
              JAVA
            </div>

            <div className="tech-label label-react">
              REACT
            </div>

            <div className="tech-label label-js">
              JS
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;