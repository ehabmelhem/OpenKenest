import React, { useEffect, useState } from "react";
import "./Recomend.css";
import Subject from "./Subject";
import at from "./Images/at.PNG";
function Recomend() {
  const [hk, setHK] = useState([]);
  useEffect(() => {
    fetch("/users/get-HK")
      .then((r) => r.json())
      .then((data) => setHK(data));
  }, []);
  return (
    <div className="recomnde">
      <Subject Icon={at} text="הגש הצעה" />
      <div className="recomend__info">
        <div className="reomnde__FirstHalf">
          <h4>חכ"ים רלוונטיים: </h4>
          <select className="select">
            {
              hk.map(elm=>)
            }
            <option>דיכנטר אבי</option>
          </select>
          <br />
          <button className="btn">שלח</button>
        </div>
        <div className="reomnde__SecindHalf">
          <h4>:נושא הצעה לסדר</h4>
          <input type="text" />
          <h4>:דברי הסבר</h4>
          <textarea name="" id="" cols="47" rows="12"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Recomend;
