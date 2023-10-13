import React from "react";
import './SnapCourses.scss';
import Button from "../button/Button";

const SnapCourses = () => {

  return (
    <div className='snapCourses'>
        <div className="snapCourses_image"></div>
        <div className="snapCourses_banner">
            <h3 className="snapCourses_banner_text">Sales</h3>
            <Button color="#143872" bgColor="#ffffff">Start</Button>
        </div>
    </div>
  );
};

export default SnapCourses;
