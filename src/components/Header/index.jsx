import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/action/CommonAction/actions";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <span onClick={() => dispatch(toggleSideBar())} className="bar">
        <i className="fas fa-bars"></i>
      </span>
    </div>
  );
};

export default Header;
