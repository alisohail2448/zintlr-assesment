import React, { useState } from "react";
import { DashboardSidebar } from "../components/DashboardSidebar";
import NavbarComponent from "../components/NavbarComponent";
import TableComponent from "../components/TableComponent";
import Dashboard from "../components/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CommonCards from "../components/CommonCards";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="relative flex flex-row">
        <div className="w-full max-w-[15rem]">
          <DashboardSidebar />
        </div>
        <div className="flex flex-col relative z-0">
          <NavbarComponent />
          <CommonCards />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route
              exact
              path="/manage"
              element={<TableComponent open={open} setOpen={setOpen} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Home;
