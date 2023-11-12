import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SolutionCard = ({ text, icon }) => {
  return (
    <div
      className="card border-0 shadow m-3 align-self-center"
      style={{ width: "40%" }}
    >
      <div className="card-body">
        <a
          href="#"
          className="d-flex justify-content-between align-items-center text-decoration-none p-3"
        >
          <span className="text-break">{text}</span>
          <span className="ms-5">
            <FontAwesomeIcon icon={icon} className="fs-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SolutionCard;
