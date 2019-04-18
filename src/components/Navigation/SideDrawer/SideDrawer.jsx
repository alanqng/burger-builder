import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/BackDrop";
import classes from "./SideDrawer.module.css";

const sideDrawer = props => {
  return (
    <React.Fragment>
      <BackDrop close={props.closed} show={props.show} />
      <div
        className={
          props.show
            ? [classes.SideDrawer, classes.Open].join(" ")
            : [classes.SideDrawer, classes.Close].join(" ")
        }
      >
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
