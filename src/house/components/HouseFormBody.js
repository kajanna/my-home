import React from "react";
import { Field } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import RenderTextField from "../../shered/formElements/RenderTextField";
import RenderCheckbox from "../../shered/formElements/RenderCheckbox";
import RenderSelectField from "../../shered/formElements/RenderSelectField";
import FormButton from "../../shered/formElements/FormButton";

const useStyles = makeStyles((theme) => ({
  frame: {
    marginBottom: 24,
    padding: 20,
    borderColor: "#dddddd",
    borderRadius: 8,
  },
  textInfo: {
    textAlign: "center",
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
      minWidth: 340,
      margin: 24,
    },
    button: {
      width: "20%",
      marginLeft: "40%",
    },
  },
}));

function HouseFormBody(props) {
  const classes = useStyles();

  const { submitting, valid, buttonText } = props;

  return (
    <React.Fragment>
      <div className={classes.formWrapper}>
        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary">
              essencial information
            </Typography>
          </div>
          <Field name="address" component={RenderTextField} label="address" />
          <Field name="price" component={RenderTextField} label="price" />
          <Field
            name="usableArea"
            component={RenderTextField}
            label="usable area"
          />
          <Field
            name="announcementURL"
            component={RenderTextField}
            label="announcement URL"
          />
          <Field
            name="imageURL"
            component={RenderTextField}
            label="image URL"
          />
        </div>

        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary">
              contact information
            </Typography>
          </div>
          <Field name="contactName" component={RenderTextField} label="name" />
          <Field
            name="contactCell"
            component={RenderTextField}
            label="cell phone number"
          />
          <Field
            name="contactEmail"
            component={RenderTextField}
            label="email"
          />
          <Field
            name="agencyName"
            component={RenderTextField}
            label="agency name"
          />
        </div>

        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              property features
            </Typography>
          </div>
          <div className={classes.selectField}>
            <Field
              name="floor"
              component={RenderSelectField}
              label="floor"
              selectionItems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
            <Field
              name="numberOfFloors"
              component={RenderSelectField}
              label="floors"
              selectionItems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />

            <Field
              name="heating"
              component={RenderSelectField}
              label="heating"
              selectionItems={[
                "?",
                "central heating",
                "district heating",
                "gas heating",
                "electric heating",
              ]}
            />
            <Field
              name="hotWater"
              component={RenderSelectField}
              label="hot water source"
              selectionItems={[
                "?",
                "central",
                "district",
                "gas boiler",
                "electric boiler",
              ]}
            />

            <Field
              name="bedrooms"
              component={RenderSelectField}
              label="bedrooms"
              selectionItems={[1, 2, 3, 4, 5]}
            />
            <Field
              name="bathrooms"
              component={RenderSelectField}
              label="bathrooms"
              selectionItems={[1, 2, 3]}
            />
          </div>

          <Field name="balcony" component={RenderCheckbox} label="balcony" />
          <Field
            name="parquet"
            component={RenderCheckbox}
            label="wooden parquet flooring"
          />
          <Field name="elevator" component={RenderCheckbox} label="elevator" />
          <Field
            name="niceStaircase"
            component={RenderCheckbox}
            label="nice staircase"
          />
          <Field name="niceView" component={RenderCheckbox} label="nice view" />
          <Field
            name="airConditioning"
            component={RenderCheckbox}
            label="air conditioning"
          />
        </div>

        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary">
              parking
            </Typography>
          </div>
          <div className={classes.selectField}>
            <Field
              name="parking"
              component={RenderSelectField}
              label="parking"
              selectionItems={[
                "no parking place",
                "separate parking place",
                "separate garage",
                "place in garage",
                "2 places in garage",
              ]}
            />
          </div>
          <Field
            name="parkingPrice"
            component={RenderTextField}
            label="parking price"
          />
        </div>

        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary">
              storage room
            </Typography>
          </div>
          <div className={classes.selectField}>
            <Field
              name="storage"
              component={RenderSelectField}
              label="storage"
              selectionItems={[
                "no storage room",
                "separate storage room",
                "basement",
              ]}
            />
          </div>
          <Field
            name="storagePrice"
            component={RenderTextField}
            label="storage price"
          />
        </div>

        <div className={classes.frame}>
          <div className={classes.textInfo}>
            <Typography variant="body2" color="textSecondary">
              renovation
            </Typography>
          </div>
          <div className={classes.selectField}>
            <Field
              name="renovationArea"
              component={RenderSelectField}
              label="renovation area"
              selectionItems={[
                "none",
                "bathroom",
                "kitchen",
                "bathroom & kitchen",
                "floor",
                "all house",
              ]}
            />
          </div>
          <Field
            name="renovationDescription"
            component={RenderTextField}
            label="renovation description"
          />
          <Field
            name="renovationPrice"
            component={RenderTextField}
            label="renovation price"
          />
        </div>
        <div className={classes.frame}>
          <Typography variant="body2" color="textSecondary">
            description
          </Typography>
          <Field
            name="description"
            component={RenderTextField}
            label="house description"
          />
        </div>
      </div>
      <div className={classes.button}>
        <FormButton disabled={!valid || submitting} buttonText={buttonText} />
      </div>
    </React.Fragment>
  );
}

export default HouseFormBody;
