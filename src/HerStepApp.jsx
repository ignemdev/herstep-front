import { Outlet } from "react-router-dom";
import Sidebar from "@components/layout/Sidebar";

const HerStepApp = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col p-0">
            <div>dd</div>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HerStepApp;
