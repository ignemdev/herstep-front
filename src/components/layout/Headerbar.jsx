import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Headerbar = ({ userInitials }) => {
  return (
    <div
      id="headerbar"
      className="sticky-top bg-success p-5 d-flex align-items-center justify-content-between"
    >
      {/* <a
        className="btn btn-light d-flex text-primary fw-bold shadow-sm rounded-circle"
        href="#"
        role="button"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="fs-3 py-1" />
      </a> */}
      <a
        className="btn btn-light d-flex text-primary shadow-sm rounded-circle py-3"
        href="#"
        role="button"
      >
        <span className="fw-bold fs-2 lh-1">{userInitials}</span>
      </a>
    </div>
  );
};

export default Headerbar;

Headerbar.defaultProps = {
  userInitials: "VF",
};
