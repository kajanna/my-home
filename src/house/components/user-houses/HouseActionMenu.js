import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, IconButton, Link } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HouseIcon from "@material-ui/icons/House";

import { selectHouseInfo } from "../../../store/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  actionButton: {
    marginLeft: 24,
  },
  paper: {
    marginTop: -16,
    borderColor: theme.palette.primary.main,
    borderRadius: 8,
  },
  menuIcon: {
    marginRight: 8,
    color: theme.palette.text.secondary,
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
}));

function HouseActionMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const announcementURL = useSelector((state) =>
    selectHouseInfo(state, props.houseId)
  ).announcementURL;

  const menuClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="house-actions-menu"
        aria-haspopup="true"
        onClick={menuClickHandler}
        className={classes.actionButton}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="house-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={menuCloseHandler}
        classes={{
          paper: classes.paper,
        }}
      >
        <MenuItem>
          <ExitToAppIcon className={classes.menuIcon} />
          <Link
            target="_blank"
            href={announcementURL}
            rel="noopener"
            underline="none"
            className={classes.navLink}
          >
            read announcment
          </Link>
        </MenuItem>
        <MenuItem>
          <HouseIcon className={classes.menuIcon} />
          <NavLink
            to={`/u1/houses/${props.houseId}`}
            className={classes.navLink}
          >
            see more details
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default HouseActionMenu;
