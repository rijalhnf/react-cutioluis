import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text center-text">
          ✋ Rijal Hanif{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text center-text">
          "Meet Rijal Hanif, the financial wizard who moonlights as a coding ninja, design enthusiast, photography aficionado, and bookworm extraordinaire. By day, he tackles numbers and customs as an accounting maestro at PKN STAN. By night, he's diving into lines of code, crafting stunning designs, capturing moments with his camera, and delving into the enchanting world of literature."{" "}
        </p>
        {/* <span className="white-text">
          <a href="https://github.com/rijalhnf">Portfolio</a>
        </span> 
        <ul className="tech-stack">
          <b>Portofolio</b>
          <li>Web Developer</li>
          <li>Designer</li>
          <li>Photographer</li>
          <li>Cinematographer</li>
          <li>Movie Editor</li>
        </ul>*/}
        {/* <a className="about-see" href="#">More{"->"} </a>*/}
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
