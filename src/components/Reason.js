import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reason = ({ icon, title, description }) => {
  return (
    <div className="reason-container">
      <FontAwesomeIcon className="reason-icon" icon={["far", icon]} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Reason;
