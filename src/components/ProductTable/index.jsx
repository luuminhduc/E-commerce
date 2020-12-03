import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/ProductAction/actions";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  img: {
    width: "50px",
  },
});

function ProductTable() {
  const classes = useStyles();
  const productReducer = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { productList } = productReducer;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Inventory</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}
              </TableCell>
              <TableCell component="th" scope="row">
                <img className={classes.img} src={row.imgList[0]} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.inventory}
              </TableCell>
              <TableCell>
                <button>
                  <i className="fas fa-pen"></i>
                </button>
                <button>
                  <i className="fas fa-trash"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
