import React, { useEffect, useState } from "react";
import "./Naom.css";
function getNaom() {
  return new Promise((resolve, reject) => {
    fetch("/users/get-naom")
      .then((r) => r.json())
      .then((data) => {
        resolve(data.info.split("}"));
      });
  });
}

function Naom() {
  const [allInfo, setAll] = useState([]);
  useEffect(async () => {
    // const all = await getNaom();
    await getNaom().then((all) => setAll(all));
    // setAll(all);
  }, []);
  return (
    <div className="naom">
      <h2>כינוס הכנסת בזמן הפגרה</h2>
      {/* <p>
        נאום של <span>חבר כנסת</span>, בכל נושא ו באורך של בדקה (תלוי בטוב לבו
        של <span>יו"ר הכנסת</span> או <span>סגן יור הכנסת </span>המנהלים את
        הישיבה בפועל
      </p> */}
      {allInfo.map((elm) => {
        return (
          <span>
            {elm[0] === "/" ? (
              <span className="link">{elm.substr(1, elm.length)}</span>
            ) : (
              elm
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Naom;
