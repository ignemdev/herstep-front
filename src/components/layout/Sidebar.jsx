import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCreditCard,
  faPencilRuler,
  faBookOpen,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light shadow"
    >
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline py-5">
            <Logo className="w-100" />
          </span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 mt-3 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item my-3">
            <a
              href="#"
              className="d-flex align-items-center nav-link px-0 text-dark fw-bold"
            >
              <FontAwesomeIcon icon={faHouse} className="fs-5" />
              <span className="ms-4 d-none d-sm-inline">Inicio</span>
            </a>
          </li>
          <li className="nav-item my-3">
            <NavLink
              to={"soluciones"}
              className="d-flex align-items-center nav-link px-0 text-dark fw-bold"
            >
              <FontAwesomeIcon icon={faCreditCard} className="fs-5" />
              <span className="ms-4 d-none d-sm-inline">Soluciones</span>
            </NavLink>
          </li>
          <li className="nav-item my-3">
            <NavLink
              to={"recursos"}
              className="d-flex align-items-center nav-link px-0 text-dark fw-bold"
            >
              <FontAwesomeIcon icon={faBookOpen} className="fs-5" />
              <span className="ms-4 d-none d-sm-inline">Recursos</span>
            </NavLink>
          </li>
          <li className="nav-item my-3">
            <a
              href="#"
              className="d-flex align-items-center nav-link px-0 text-dark fw-bold"
            >
              <FontAwesomeIcon icon={faPencilRuler} className="fs-5" />
              <span className="ms-4 d-none d-sm-inline">Academia</span>
            </a>
          </li>
          <li className="nav-item my-3">
            <a
              href="#"
              className="d-flex align-items-center nav-link px-0 text-dark fw-bold"
            >
              <FontAwesomeIcon icon={faUserCircle} className="fs-5" />
              <span className="ms-4 d-none d-sm-inline">Perfil</span>
            </a>
          </li>
        </ul>
        <hr className="border border-primary border-2 opacity-100 w-100" />
        <div className="dropdown pb-4 text-primary fw-bold">
          <a className="text-primary fw-bold text-decoration-none" href="#">
            Salir
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
