import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Button, Link } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import * as actionCreators from "../../store/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 16,
  },
  link: {
    textDecorationLine: "none",
    "&:hover": {
      textDecorationLine: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    root: {
      display: "flex",
      flexDirection: "row",
      margin: 14,
    },
  },
}));

const NavLinks = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const logoutUser = () => dispatch(actionCreators.logout());

  let NavLinks;
  if (isAuth) {
    NavLinks = (
      <React.Fragment>
        <div>
          <Link to="/new" component={RouterLink} className={classes.link}>
            <Button color="primary" startIcon={<AddCircleOutlineIcon />}>
              ADD NEW HOUSE
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/" component={RouterLink} className={classes.link}>
            <Button color="primary" startIcon={<FavoriteBorderIcon />}>
              FAVORITE HOUSES
            </Button>
          </Link>
        </div>
        <div>
          <Button
            color="primary"
            startIcon={<ExitToAppIcon />}
            onClick={logoutUser}
          >
            LOGOUT
          </Button>
        </div>
      </React.Fragment>
    );
  } else {
    NavLinks = (
      <React.Fragment>
        <div>
          <Link to="/" component={RouterLink}>
            <Button color="primary">LOGIN</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
  return <div className={classes.root}>{NavLinks}</div>;
};

export default NavLinks;
