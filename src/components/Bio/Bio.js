// import ReactTooltip from "react-tooltip";
// import { BioDetails } from "../BioDetails/BioDetails";
import { useNavigate } from "react-router-dom";
import { BIO } from "../../constants/bio";
import "./Bio.css";

export const Bio = () => {
  const navigate = useNavigate();
  function handleNav(path) {
    return function (event) {
      event.preventDefault();
      navigate(path);
    };
  }
  return (
    <section id="work" className="container container-lines">
      <p className="purple-text">
        🚀 Work <span className="purple-smoke-text">Experience</span>{" "}
      </p>
      <div className="line"></div>
      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text" data-tip="soo cuteeeee">
            {e.title.cargo} at {e.title.name}
          </span>
          <p className="gray-text">{e.description}</p>
          <a href="_blank" onClick={handleNav(e.portfolio)}>
            Portfolio {e.title.cargo}
          </a>
          {/* <ReactTooltip
            getContent={(dataTip) => `This little buddy is ${dataTip}`}
            place="top"
            effects="float"
            className="custom-theme"
          >
                         <BioDetails />
             {" "}
          </ReactTooltip> */}
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
