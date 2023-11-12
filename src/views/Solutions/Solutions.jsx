import SolutionCard from "@components/Solutions/SolutionCard";

import { faCreditCard, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Solutions = () => {
  return (
    <>
      <div className="p-3">
        <h3 className="text-dark">
          Comienza tus{" "}
          <span className="fw-bold">primeros pasos en el mundo financiero</span>
        </h3>
        <h6 className="text-dark">
          Obtén los recursos e información que necesitas para empezar tus
          primeros pasos financieros
        </h6>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-10 p-0">
            <div className="d-flex flex-wrap">
              <SolutionCard
                text={"¿Sabes que es una tarjeta de crédito?"}
                icon={faCreditCard}
              />
              <SolutionCard
                text={"¿Sabes que es un fondo de inversion?"}
                icon={faChartLine}
              />
            </div>
          </div>
          <div className="col">ad_banner</div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
