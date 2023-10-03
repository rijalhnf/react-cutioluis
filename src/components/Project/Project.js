import React from "react";
import "./Project.css";
// import Line from "../../images/line-purple.svg";
// import ImageTemp from "../../images/prev-project-temp.png";
// import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻 On Track -
        <span className="purple-smoke-text">Learning </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">my own-personal-webpage</span>
          <p className="gray-text text-box">
            Created using React JS, deploy via github with Vercel. Oftenly migrating from Adobe Illustrator to web-based design application.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">my own-wedding-video</span>
          <p className="gray-text text-box">
            Edited in Final Cut Pro, and a bit effects in Adobe Premiere Pro.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      {/* <div className="project-details">
        <img src={ImageTemp} alt="Project React Simple Portfolio" />
        <div className="details-left">
          <p className="gray-text">
            our loved web-based apppp:
            <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span>
          </p>
          <div className="details-stack">
            <span className="white-text">Technology</span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>Svelte (a bit)</li>
              <li>Tableau</li>
            </ul>
          </div>
          <p className="gray-text">
            Building on <span className="white-text">Github</span> and old portfolio <span className="white-text">Instagram</span>{" "}
          </p>
  </div>
      </div>*/}
    </section>
  );
}

export default Project;
