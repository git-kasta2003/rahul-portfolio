
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" }
  ];

  const navStyle = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;


  // 3D Mouse Movement

  function handleMouseMove(event) {

    const navbar = event.currentTarget;

    const rect = navbar.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 6;
    const rotateX = (0.5 - y) * 4;

    navbar.style.setProperty("--rotate-x", `${rotateX}deg`);
    navbar.style.setProperty("--rotate-y", `${rotateY}deg`);

    navbar.style.setProperty("--light-x", `${x * 100}%`);
    navbar.style.setProperty("--light-y", `${y * 100}%`);

  }


  // Reset 3D Movement

  function handleMouseLeave(event) {

    const navbar = event.currentTarget;

    navbar.style.setProperty("--rotate-x", "0deg");
    navbar.style.setProperty("--rotate-y", "0deg");

    navbar.style.setProperty("--light-x", "50%");
    navbar.style.setProperty("--light-y", "50%");

  }


  return (

    <nav
      className="main-navbar"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Background Animation */}

      <div className="navbar-light"></div>


      {/* RK Logo */}

      <div className="rk-logo-wrap">

        <Link
          to="/"
          className="rk-logo"
          onClick={() => setIsOpen(false)}
          aria-label="Home"
        >
          <span>R</span>
          <span className="rk-k">K</span>
          <span className="rk-dot">.</span>
        </Link>

        <div className="rk-orbit">
          <span className="rk-planet"></span>
        </div>

        <div className="rk-orbit rk-orbit-two">
          <span className="rk-planet rk-planet-two"></span>
        </div>

      </div>


      {/* Desktop Navigation */}

      <div className="desktop-nav">

        {navLinks.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            className={navStyle}
          >
            {link.name}
          </NavLink>

        ))}

      </div>


      {/* Social Icons */}

      <div className="navbar-social">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>


      {/* Mobile Menu Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>


      {/* Mobile Menu */}

      <div className={`mobile-nav ${isOpen ? "mobile-nav-open" : ""}`}>

        {navLinks.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={navStyle}
          >
            {link.name}
          </NavLink>

        ))}

        <div className="mobile-social">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
