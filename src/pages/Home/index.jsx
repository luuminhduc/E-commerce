import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import SideBar from "../../components/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "../../components/DashBoard";
import AddProduct from "../../components/AddProduct";
import Calendar from "../../components/Calendar";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

const Home = () => {
  return (
    <Router>
      <Loading />
      <Alert />
      <div className="home">
        <SideBar />
        <div className="main">
          <Header />
          <div className="subMain">
            <Switch>
              <Route exact={true} path="/dashboard">
                <DashBoard />
              </Route>
              <Route exact={true} path="/addProduct">
                <AddProduct />
              </Route>
              <Route exact={true} path="/calendar">
                <Calendar />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
