import { Outlet } from "react-router-dom";
import Sidebar from "@components/layout/Sidebar";
import Headerbar from "@components/layout/Headerbar";

const HerStepApp = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col p-0">
            <Headerbar />
            <div
              id="content-wrapper"
              className="p-5"
              style={{
                overflowY: "auto",
                maxHeight: "750px",
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HerStepApp;
