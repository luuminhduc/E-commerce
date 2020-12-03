import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSideBar } from "../../redux/action/CommonAction/actions";

const SideBar = () => {
  const dispatch = useDispatch();
  const commonReducer = useSelector((state) => state.commonReducer);
  const { sideBar } = commonReducer;
  return (
    <div className={`sideBar ${sideBar ? "sideBar_active" : ""}`}>
      <span
        onClick={() => dispatch(toggleSideBar())}
        className="close_side_bar"
      >
        <i className="fas fa-times"></i>
      </span>
      <NavLink activeClassName="active" to="/dashboard" className="sideBarItem">
        <i className="fas fa-home"></i>
        <span>Product</span>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/addProduct"
        className="sideBarItem"
      >
        <i className="fas fa-plus"></i>
        <span>Add product</span>
      </NavLink>
      <NavLink activeClassName="active" to="/calendar" className="sideBarItem">
        <i className="fas fa-calendar"></i>
        <span>Calendar</span>
      </NavLink>
      <div className="sideBarItem">
        <i className="fas fa-key"></i>
        <span>Key</span>
      </div>
      <div className="sideBarItem">
        <i className="fas fa-key"></i>
        <span>Key</span>
      </div>
      <div className="sideBarItem">
        <i className="fas fa-key"></i>
        <span>Key</span>
      </div>
      <div className="sideBarItem">
        <i className="fas fa-key"></i>
        <span>Key</span>
      </div>
    </div>
  );
};

export default SideBar;
