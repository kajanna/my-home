import React, { forwardRef } from "react";
import ReactDOM from 'react-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import Line from "../UIElements/Line";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  buttonSection: {
    display: "flex",
    justifyContent: "space-between",
    margin: 16
  },
  buttonDecline: {
    marginRight: 0
  },
  buttonWarning: {
    color: theme.palette.warning.main
  },
}));

const Modal = (props) => {
  const classes = useStyles();
  const modal = ( <Dialog
    className={classes.root}
    open={props.open}
    TransitionComponent={Transition}
    keepMounted
    onClose={props.close}
    aria-labelledby="modal-slide-title"
    aria-describedby="modal-slide-description"
  >
    <DialogTitle id="modal-slide-title">{props.title}</DialogTitle>
    <Line />
    <DialogContent id="modal-slide-description">
      {props.modalText && 
      <Typography variant="body2" color="textSecondary" component="p">
        {props.modalText}
      </Typography>}
      {props.content && props.content}
    </DialogContent>
    <DialogActions className={classes.buttonSection}>
      {props.buttonText && (
        <Button
          onClick={props.onClickButton}
          variant="outlined"
          className={classes.buttonDecline}
        >
          {props.buttonText}
        </Button>
      )}
      {props.buttonText2 && (
        <Button
          onClick={props.onClickButton2}
          variant="outlined"
          className={classes.buttonWarning}
        >
          {props.buttonText2}
        </Button>
      )}
    </DialogActions>
  </Dialog>
  )
  return ReactDOM.createPortal(modal, document.getElementById("modal"))
};

export default Modal;