import React from "react";
import "./Project.css";
// import Line from "../../images/line-purple.svg";
// import ImageTemp from "../../images/prev-project-temp.png";
// import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻 Skill-
        <span className="purple-smoke-text">Set</span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">Adobe Premiere Pro/After Effects/FCP X</span>
          <p className="gray-text text-box">
            DSLR & Mirrorless Camera user. Motion Design 2D, Video Editing. PS: lately just prefer iphone + FCP X combo.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">Adobe Illustrator/Figma</span>
          <p className="gray-text text-box">
            Creating graphic design, layouting, and prototyping.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">ReactJS</span>
          <p className="gray-text text-box">
            Thinking in React, React hooks, Context API.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">React Library</span>
          <p className="gray-text text-box">
            Redux, RTK, React-Router, React Query.
          </p>
        </div>
        {/* <img className="project-line" src={Line} alt="abajo" />*/}
      </div>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text center-text">User-Interface Library</span>
          <p className="gray-text text-box">
            Ant-Design (soon Chart), Tailwind CSS.
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
