import React, { useEffect, useState } from "react";
import Subject from "./Subject";
import "./Taknon.css";
import Logo from "./Images/tak_icon.PNG";
function Taknon() {
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [artcile, setArtcile] = useState("");
  useEffect(() => {
    fetch("/users/get-takanon")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="taknon scroll">
      <Subject text="תקנון" Icon={Logo} />
      <div className="taknon__data">
        <h5>{info}</h5>
        <h5>{type}</h5>
        <h5>{number}</h5>
        <h5 className="articl">נאומים בני דקה (תיקון מס' 112)</h5>
      </div>
    </div>
  );
}

export default Taknon;
