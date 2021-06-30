import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import LoginForm from "../components/LoginForm";
import SignInForm from "../components/SignInForm";
import Modal from "../../shered/UIElements/Modal";
import Loading from "../../shered/UIElements/Loading"
import * as actionCreators from "../../store/index";

const useStyles = makeStyles((theme) => ({
  frame: {
    padding: 10,
    paddingTop: 20,
    borderRadius: 8,
    margin: 30,
  },
  [theme.breakpoints.up("sm")]: {
    root: {
      display: "flex",
      justifyContent: "space-around",
    },
    frame: {
      width: 340,
      height: 340,
      display: "flex",
      flexDirection: "column",
      flexFlow: "warp",
      justifyContent: "center",
    },
  },
}));

const Auth = () => {
  const classes = useStyles();

  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const loginHandler = (email, password) => {
    dispatch(actionCreators.login(email, password));
  };
  const signInHandler = (email, password) => {
    dispatch(actionCreators.signIn(email, password));
  };

  return (
    <div className={classes.root}>
      {error && (
        <Modal
          open={!!error}
          close={() => dispatch(actionCreators.clearError())}
          title="Something went wrong"
          modalText={error.message}
          onClickButton={() => dispatch(actionCreators.clearError())}
          buttonText="CLOSE"
        />
      )}
      <Paper elevation={3} className={classes.frame}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
          <LoginForm
            onSubmit={(values) => loginHandler(values.email, values.password)}
            buttonText="LOGIN"
          />
      </Paper>
     {loading && <Loading />}
      <Paper elevation={3} className={classes.frame}>
        <Typography variant="h5" align="center">
          Sign in
        </Typography>
          <SignInForm
            onSubmit={(values) => signInHandler(values.email, values.password)}
            buttonText="SIGN IN"
          />
      </Paper>
    </div>
  );
};

export default Auth;
