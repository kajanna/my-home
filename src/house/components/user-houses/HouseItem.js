import React, { useState } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Collapse,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import DeleteModal from "../../../shered/UIElements/DeleteModal";
import EditModal from "../../../shered/UIElements/EditModal";
import HouseActionMenu from "./HouseActionMenu";
import HouseContact from "../house-details/HouseContact";
import HouseItemContent from "./HouseItemContent";
import { selectHouseInfo } from "../../../store/index";
import ActionButtons from "../../../shered/UIElements/ActionButtons";

const useStyles = makeStyles((theme) => ({
  frame: {
    margin: 30,
    marginTop: 10,
    borderRadius: 8,
    width: 320,
  },
  media: {
    height: 0,
    margin: 0,
    paddingTop: "80%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  [theme.breakpoints.up("xs")]: {
    frame: {
      width: 290,
    },
  },
}));

const HouseItem = (props) => {
  const classes = useStyles();

  const address = useSelector(state => selectHouseInfo(state, props.houseId)).address;
  const imageURL = useSelector(state => selectHouseInfo(state, props.houseId)).imageURL;
  const userId = useSelector(state => selectHouseInfo(state, props.houseId),).userId;
  const token = useSelector((state) => state.auth.token);

  const [expanded, setExpanded] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const [openEditModal, setEditModal] = useState(false);

  const expandHandler = () => {
    setExpanded(!expanded);
  };
  const openDeleteModalHandler = () => {
    setDeleteModal(true);
  };
  const closeDeleteModalHandler = () => {
    setDeleteModal(false);
  };

  const openEditModalHandler = () => {
    setEditModal(true);
  };
  const closeEditModalHandler = () => {
    setEditModal(false);
  };

  return (
    <React.Fragment>
      <DeleteModal
        open={openDeleteModal}
        close={closeDeleteModalHandler}
        address={address}
        houseId={props.houseId}
        token={token}
      />
      <EditModal
        open={openEditModal}
        close={closeEditModalHandler}
        address={address}
        houseId={props.houseId}
        userId={userId}
      />
      <Card className={classes.frame} elevation={3}>
        <CardMedia className={classes.media} image={imageURL} />
        <CardHeader
          title={address}
          action={<HouseActionMenu houseId={props.houseId} />}
        />

        <HouseItemContent houseId={props.houseId} />
        <CardActions disableSpacing>
          <ActionButtons
            openEditModal={openEditModalHandler}
            openDeleteModal={openDeleteModalHandler}
          />
          <IconButton
            className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
            onClick={expandHandler}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="subtitle1">contact details</Typography>
            <HouseContact houseId={props.houseId} />
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};

export default HouseItem;
