import React from "react";
import { useSelector } from "react-redux";

import { Typography, Link, Tooltip, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import HouseDetailsItem from "./HouseDetailsItem";
import HouseContact from "./HouseContact";
import HouseFeatures from "./HouseFeatures";
import HouseFeaturesCheckbox from "./HouseFeaturesCheckbox";
import HouseParking from "./HouseParking";
import HouseStorage from "./HouseStorage";
import HouseRenovation from "./HouseRenovation";
import { selectHouseInfo } from "../../../store/index";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 16,
    marginTop: 8,
  },
  address: {
    marginBottom: 24,
  },
  frame: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 8,
  },
  textInfo: {
    marginBottom: 7,
  },
  selectField: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  button: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    formWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    frame: {
      width: 340,
      margin: 16,
    },
    button: {
      width: "20%",
      marginLeft: "40%",
    },
  },
}));

function HouseDetailsInfo(props) {
  const classes = useStyles();
  const address = useSelector((state) => selectHouseInfo(state, props.houseId))
    .address;
  const usableArea = useSelector((state) =>
    selectHouseInfo(state, props.houseId)
  ).usableArea;
  const price = useSelector((state) => selectHouseInfo(state, props.houseId))
    .price;
  const announcementURL = useSelector((state) =>
    selectHouseInfo(state, props.houseId)
  ).announcementURL;
  const description = useSelector((state) =>
    selectHouseInfo(state, props.houseId)
  ).description;

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        align="center"
        color="secondary"
        className={classes.address}
      >
        {address}
      </Typography>
      <div className={classes.formWrapper}>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              essencial information
            </Typography>
          </div>
          <HouseDetailsItem detailName="price" detailValue={price} />
          <HouseDetailsItem detailName="usable area" detailValue={usableArea} />
          <Link
            target="_blank"
            href={announcementURL}
            rel="noopener"
            underline="none"
          >
            <Typography color="textSecondary" variant="body2">
              <Tooltip title="go to announcement" placement="top" arrow>
                <ExitToAppIcon fontSize="inherit" />
              </Tooltip>
            </Typography>
          </Link>
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              contact information
            </Typography>
          </div>
          <HouseContact houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary" gutterBottom>
              property features
            </Typography>
          </div>
          <HouseFeatures houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary" gutterBottom>
              others features
            </Typography>
          </div>
          <HouseFeaturesCheckbox houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              parking
            </Typography>
          </div>
          <HouseParking houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              storage room
            </Typography>
          </div>
          <HouseStorage houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              renovation
            </Typography>
          </div>
          <HouseRenovation houseId={props.houseId} />
        </Paper>
        <Paper elevation={3} className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="primary">
              description
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default HouseDetailsInfo;
