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
            <div id="content-wrapper" className="px-5 py-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HerStepApp;
