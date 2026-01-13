import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Pranav</span>
          </h1>
          <h2 className="hero-subtitle">Creative Model & Photographer</h2>
          <p className="hero-description">
            Capturing moments and bringing creative visions to life through
            modeling and photography.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img className="avatar-circle" src="/P1021240.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
