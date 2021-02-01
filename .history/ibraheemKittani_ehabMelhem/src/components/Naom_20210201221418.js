import React, { useEffect, useState } from "react";
import "./Naom.css";
function Naom() {
  const [allInfo, setAll] = useState([]);
  useEffect(() => {
    fetch("/users/get-naom")
      .then((r) => r.json())
      .then((data) => {
        setAll(data.info.split("}"));
      });
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
        return <p>{elm[0] === "/" ? <span>{elm}</span> : elm}</p>;
      })}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic
        suscipit aliquam optio quisquam tenetur ipsum pariatur, vero eligendi
        culpa explicabo nemo sequi modi, quam obcaecati quidem incidunt, amet
        odio?
      </p>
    </div>
  );
}

export default Naom;
