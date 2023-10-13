import React from "react";
import "./Dashboard.scss";
import DashPod from "../../components/dashPod/DashPod";
import SnapCourses from "../../components/snapCourses/SnapCourses";
import Favourites from "../../components/favourites/Favourites";
import QuickLinks from "../../components/quickLinks/QuickLinks";
import Search from "../../components/search/Search";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_grid">
        <div className="dashboard_grid_left">
          <DashPod title="Learning Journey"></DashPod>
          <DashPod title="Find Content">
            <Search></Search>
            <QuickLinks></QuickLinks>
          </DashPod>
        </div>
        <div className="dashboard_grid_right">
          <DashPod title="Snap Courses">
            <SnapCourses></SnapCourses>
          </DashPod>
          <DashPod title="Favourites">
            <Favourites></Favourites>
          </DashPod>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
