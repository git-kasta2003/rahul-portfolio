import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const contactDetails = [
    {
      id: "01",
      title: "EMAIL",
      value: "your-rahulkasta2003@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:your-rahulkasta2003@gmail.com",
      label: "SEND AN EMAIL",
    },
    {
      id: "02",
      title: "LINKEDIN",
      value: "Connect with me",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rahulkasta72/",
      label: "VISIT PROFILE",
    },
    {
      id: "03",
      title: "GITHUB",
      value: "Explore my projects",
      icon: <FaGithub />,
      link: "https://github.com/git-kasta2003",
      label: "VIEW GITHUB",
    },
    {
      id: "04",
      title: "LOCATION",
      value: "Bhubaneswar, Odisha, India",
      icon: <FaMapMarkerAlt />,
      link: null,
      label: "BASED IN INDIA",
    },
  ];

  return (
    <section className="contact-section">

      <div className="contact-bg-grid"></div>
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* HEADING */}
        <div className="contact-heading">

          <p className="contact-eyebrow">
            <span></span> LET'S CONNECT
          </p>

          <h1>
            CONTACT <span>ME.</span>
          </h1>

          <p>
            Have a project idea or an opportunity to discuss?
            Feel free to get in touch with me.
          </p>

          <div className="contact-heading-line"></div>

        </div>

        {/* MAIN CONTENT */}
        <div className="contact-main">

          {/* LEFT SIDE */}
          <div className="contact-intro-card">

            <div className="contact-orbit">
              <div className="contact-orbit-ring"></div>
              <div className="contact-orbit-ring second"></div>

              <div className="contact-orbit-center">
                RK<span>.</span>
              </div>
            </div>

            <p className="contact-small-text">
              HAVE A GREAT IDEA?
            </p>

            <h2>
              Let's Build
              <br />
              Something <span>Great.</span>
            </h2>

            <p className="contact-description">
              I'm always interested in learning, collaborating
              and exploring new opportunities in technology.
            </p>

            <div className="contact-availability">
              <span></span>
              OPEN TO OPPORTUNITIES
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-details">

            {contactDetails.map((item) => {

              const CardContent = (
                <>
                  <div className="contact-card-top">
                    <span>{item.title}</span>
                    <span>{item.id}</span>
                  </div>

                  <div className="contact-card-middle">

                    <div className="contact-icon">
                      {item.icon}
                    </div>

                    <div className="contact-card-text">
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>

                    {item.link && (
                      <span className="contact-card-arrow">
                        ↗
                      </span>
                    )}

                  </div>
                </>
              );

              return item.link ? (
                <a
                  href={item.link}
                  target={item.id === "01" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="contact-card"
                  key={item.id}
                >
                  {CardContent}
                  <div className="contact-card-shine"></div>
                </a>
              ) : (
                <div className="contact-card" key={item.id}>
                  {CardContent}
                  <div className="contact-card-shine"></div>
                </div>
              );
            })}

          </div>

        </div>

        {/* FOOTER */}
        <footer className="contact-footer">

          <div className="contact-footer-logo">
            RK<span>.</span>
          </div>

          <p>
            Designed & Built by <strong>Rahul Kasta</strong>
          </p>

          <span>© 2026 · ALL RIGHTS RESERVED</span>

        </footer>

      </div>
    </section>
  );
}

export default Contact;