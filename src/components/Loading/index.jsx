import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLoading } = commonReducer;
  return isLoading ? (
    <div className="loading">
      <div className="circle-loading"></div>
    </div>
  ) : (
    ""
  );
};

export default Loading;
