import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import ProductTable from "../ProductTable";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <h1>Products</h1>
      <ProductTable />
    </div>
  );
};

export default DashBoard;
