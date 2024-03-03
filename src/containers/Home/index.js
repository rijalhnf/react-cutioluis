import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import Calendar from "../calendar/Calendar";
import College from "../college/College"
import ContentCreator from "../contentCreator/ContentCreator"
import Developer from "../developer/Developer"
import Meals from "../meals/Meals"
import Weather from "../weather/Weather";
import { ConfigProvider, theme, } from "antd";


function Content({ props }) {
  switch (props) {
    case "calendar":
      return <Calendar />
    case "college":
      return <College />
    case "contentcreator":
      return <ContentCreator />
    case "developer":
      return <Developer />
    case "meals":
      return <Meals />
    case "weather":
      return <Weather />
    default:
      return <div>
        <Header />
        <About />
        <Bio />
        <Project />
        <Footer />
      </div>
  }
}

function Home({ fill }) {
  const [whiteMode, setQuietMode] = useState(false);
  console.log(fill)

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };


  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>

      <ConfigProvider theme={{ algorithm: whiteMode ? theme.defaultAlgorithm : theme.darkAlgorithm }}>

        <Mode setMode={whiteMode} handleModeChange={handleModeChange} fill={fill} />

        <Content props={fill} />

      </ConfigProvider>

    </div>
  );
}

export default Home;
