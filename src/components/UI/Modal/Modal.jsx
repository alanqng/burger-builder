import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/BackDrop";

const modal = props => {
  return (
    <React.Fragment>
        <BackDrop show={props.purchasing} close={props.closeModal}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.purchasing ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
