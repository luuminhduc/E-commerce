import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { alertList } = commonReducer;
  return (
    <div className="alertList">
      {alertList.map((el) => (
        <div className={`alert ${el.status}`}>{el.title}</div>
      ))}
    </div>
  );
};

export default Alert;
