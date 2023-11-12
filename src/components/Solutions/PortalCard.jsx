import { Link } from "react-router-dom";
import bankLogo from "@assets/logoPopular.png";

const PortalCard = ({ text, icon }) => {
  return (
    <div className="rounded-4 card border-0 shadow m-3 align-self-center w-50">
      <div className="card-body">
        <Link
          to={"#"}
          className="d-flex justify-content-between align-items-center text-decoration-none p-3 text-dark"
        >
          <span className="text-start">{text}</span>
          <span className="ms-5">
            <img style={{ width: "50px" }} src={bankLogo} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PortalCard;
