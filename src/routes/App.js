import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home fill={""} />} />
        <Route path="/calendar" element={<Home fill={"calendar"} />} />
        <Route path="/college" element={<Home fill={"college"} />} />
        <Route path="/contentcreator" element={<Home fill={"contentcreator"} />} />
        <Route path="/developer" element={<Home fill={"developer"} />} />
        <Route path="/meals" element={<Home fill={"meals"} />} />
        <Route path="/weather" element={<Home fill={"weather"} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
