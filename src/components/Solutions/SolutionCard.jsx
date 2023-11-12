import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SolutionCard = ({ text, icon }) => {
  return (
    <div
      className="rounded-4 card border-0 shadow m-3 align-self-center"
      style={{ width: "40%" }}
    >
      <div className="card-body">
        <Link
          to={"/pasos"}
          className="d-flex justify-content-between align-items-center text-decoration-none p-3"
        >
          <span className="text-break">{text}</span>
          <span className="ms-5">
            <FontAwesomeIcon icon={icon} className="fs-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
