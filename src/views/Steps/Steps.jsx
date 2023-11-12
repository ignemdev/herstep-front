import PortalCard from "@components/Solutions/PortalCard";

const Steps = () => {
  return (
    <div className="d-flex">
      <div className="rounded-4 card border-0 shadow m-3 align-self-start w-25">
        <div className="card-body">
          <div id="canva-wrapper">
            <iframe
              loading="lazy"
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFz4Ah2Gug&#x2F;view?embed"
              allowFullScreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="m-3 align-self-start w-75">
        <span className="mx-3 text-dark fw-bold">
          Adquiere este producto en:
        </span>
        <PortalCard text={"Banco Popular"} />
      </div>
    </div>
  );
};

export default Steps;
