import React, { useEffect } from "react";
import "./Naom.css";
function Naom() {
  useEffect(() => {
    fetch()
  }, []);
  return (
    <div className="naom">
      <h2>כינוס הכנסת בזמן הפגרה</h2>
      <p>
        נאום של <span>חבר כנסת</span>, בכל נושא ו באורך של בדקה (תלוי בטוב לבו
        של <span>יו"ר הכנסת</span> או <span>סגן יור הכנסת </span>המנהלים את
        הישיבה בפועל
      </p>
    </div>
  );
}

export default Naom;
