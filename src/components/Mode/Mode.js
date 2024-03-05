import { useNavigate } from "react-router-dom";
import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { Dropdown, Space } from 'antd';

function DropdownItem({ link, name }) {
  const navigate = useNavigate();
  function handleNav(path) {
    return function (event) {
      event.preventDefault();
      navigate(path);
    };
  }
  return (
    <a href="_blank" onClick={handleNav(link)}>
      {name}
    </a>
  );
}


export default function Mode({ handleModeChange, setMode, fill }) {

  const projects = [
    {
      label: (
        <DropdownItem link="/calendar" name="Calendar" />
      ),
      key: '0',
    },
    {
      label: (
        <DropdownItem link="/weather" name="Weather" />

      ),
      key: '1',
    },
    {
      label: (
        <DropdownItem link="/meals" name="Meals" />

      ),
      key: '2',
    },
  ];

  const portfolio = [
    {
      label: (
        <DropdownItem link="/contentcreator" name="Content Creator" />

      ),
      key: '0',
    },
    {
      label: (
        <DropdownItem link="/college" name="College" />

      ),
      key: '1',
    },
    {
      label: (
        <DropdownItem link="/developer" name="Developer" />

      ),
      key: '2',
    },
  ];

  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          {fill === "" ?
            <> <li>
              <a href="/#about">Me</a>
            </li>
              <li>
                <a href="/#work" >Works</a>
              </li></> :
            <><li>
              <DropdownItem link="/" name="Home ⚛" />
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

          <li style={{ cursor: "pointer" }} key="items">
            <Dropdown
              menu={{ items: projects }} theme="dark">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Project ⬇
                </Space>
              </a>
            </Dropdown>
          </li>

          <li style={{ cursor: "pointer" }} key="portfolio">
            <Dropdown
              menu={{ items: portfolio }} theme="dark">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Portfolio ⬇
                </Space>
              </a>
            </Dropdown>
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
