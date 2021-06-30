import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { Typography, Link, Card } from "@material-ui/core";

import HouseItem from "../components/user-houses/HouseItem";
import Modal from "../../shered/UIElements/Modal";
import Loading from '../../shered/UIElements/Loading';
import * as actionCreators from "../../store/index";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 50,
    padding:30
  },
  link: {
    textDecorationLine: "none",
    color: theme.palette.secondary.main,
    "&:hover": {
      textDecorationLine: "none",
      color: theme.palette.secondary.light
    },
  },
  [theme.breakpoints.up("xs")]: {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
  },
}));

const UserHouses = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const error = useSelector((state) => state.houses.error);
  const loading = useSelector((state) => state.houses.loading);
  const userId = useSelector((state) => state.auth.userId);
  const houses = useSelector((state) => state.houses.houses);
  const isSubmitted = useSelector((state) => state.houses.isSubmitted);

  useEffect(() => {
    dispatch(actionCreators.fetchHouses(userId));
  }, [dispatch, userId, isSubmitted]);

  return (
    <div className={classes.root}>
      {error && (
        <Modal
          open={!!error}
          close={() => dispatch(actionCreators.clearHousesError())}
          title="Something went wrong"
          modalText={error.message}
          onClickButton={() => dispatch(actionCreators.clearHousesError())}
          buttonText="CLOSE"
        />
      )}
      {loading && <Loading />}
      {houses.length === 0 && (
        <Card className={classes.card}>
          <Typography align="center">No houses.</Typography>
          <Typography align="center">
            Maybe you wish to create and save one?
          </Typography>
          <Link
            component={RouterLink}
            to="/new"
            className={classes.link}
            variant="button"
          >
            <Typography align="center">ADD NEW HOUSE</Typography>
          </Link>
        </Card>
      )}
      {isSubmitted && houses && <Redirect to="/" />}
      {!isSubmitted &&
        houses.length > 0 &&
        houses.map((h) => <HouseItem houseId={h.houseId} key={h.houseId} />)}
    </div>
  );
};

export default UserHouses;
