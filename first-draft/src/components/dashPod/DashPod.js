import React from "react";
import './DashPod.scss';

const DashPod = ({ title, side, children }) => {
  const podClasses = `dashPod ${side === "left" ? "left" : "right"}`;

  return (
    <div className={podClasses}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default DashPod;
