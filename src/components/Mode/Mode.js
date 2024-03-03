import { useNavigate } from "react-router-dom";
import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { Dropdown, Space } from 'antd';

export default function Mode({ handleModeChange, setMode, fill }) {
  const navigate = useNavigate();
  function handleNav(path) {
    return function (event) {
      event.preventDefault();
      navigate(path);
    };
  }
  const items = [
    {
      label: (
        <a href="_blank" onClick={handleNav("/calendar")}>
          Calendar
        </a>

      ),
      key: '0',
    },
    {
      label: (
        <a href="_blank" onClick={handleNav("/weather")}>
          Weather
        </a>

      ),
      key: '1',
    },
    {
      label: (
        <a href="_blank" onClick={handleNav("/meals")}>
          Meals
        </a>

      ),
      key: '2',
    },
    {
      label: (
        <a href="_blank" onClick={handleNav("/college")}>
          College
        </a>

      ),
      key: '3',
    },
    {
      label: (
        <a href="_blank" onClick={handleNav("/contentcreator")}>
          Content Creator
        </a>

      ),
      key: '4',
    },
    {
      label: (
        <a href="_blank" onClick={handleNav("/developer")}>
          Developer
        </a>

      ),
      key: '5',
    },
  ];
  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          {fill === "default" ?
            <> <li>
              <a href="/#about">Me</a>
            </li>
              <li>
                <a href="/#work" >Works</a>
              </li></> :
            <><li>
              <a href="/" onClick={handleNav("/")}>Home</a>
            </li></>}

          <li>
            <a target="_blank" href="https://github.com/rijalhnf/react-cutioluis" rel="noreferrer">
              <span className="link-decoration">Source</span>
              <span className="icon-change">
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                  alt="External Link"
                />
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />
              </span>
            </a>
          </li>
          <li style={{ cursor: "pointer" }}>
            <Dropdown
              menu={{ items, }} theme="dark">

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Project
                </Space>
              </a>
            </Dropdown>
            {/* <a href="/calendar" onClick={handleNav("/calendar")}>Calendar</a> */}
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
