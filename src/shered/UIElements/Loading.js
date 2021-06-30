import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core/";

const useStyles = makeStyles({
    root:  {
         zIndex: 100,
         position: "fixed",
         top: 80,
         left: 0,
         height: "100%",
         width: "100%",
         display: "flex",
         flexFlow: "column nowrap",
         alignItems: "center"
    },
 
});
const Loading = () => {
  const classes = useStyles();

  return ReactDOM.createPortal(
    <div className={classes.root}>
      <CircularProgress size={90} />
    </div>,
    document.getElementById("loading")
  );
};

export default Loading;