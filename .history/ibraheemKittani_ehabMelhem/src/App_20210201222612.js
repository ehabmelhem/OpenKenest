import React, { useEffect,useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Naom from "./components/Naom";
import Taknon from "./components/Taknon";
import Time from "./components/Time";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Recomend from "./components/Recomend";
import Foter from "./components/Foter";
function App() {
  const [timeHistoryData,setHistory]
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="container">
        <div className="up">
          <Taknon />
          <Naom />
        </div>
        <div className="down">
          <Time data={timeHistoryData} text="היסטוריה" />
          <Time data={timeFutreData} text="עתיד" />
        </div>
        <Recomend />
      </div>
      <Foter />
    </div>
  );
}

export default App;
