import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withStyles, createStyles } from "@material-ui/core/styles";
import { ProfileBackgroundColor } from "../Constants";

import { generateButtons } from "../Factory/ButtonFactory";

const styles = () =>
  createStyles({
    headshot: {
      borderRadius: "50%",
      height: "240px",
      width: "200px",
      border: "3px solid black"
    },
    profileInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    name: {
      marginTop: "-30px"
    },
    blurb: {
      marginTop: "-20px"
    },
    nameTxt: {
      fontFamily: "Georgia, serif",
      fontSize: "40px"
    },
    quickLinks: {
      display: "flex",
      marginTop: "50px"
    },
    smallIcon: {
      width: "45px",
      height: "45px",
      backgroundColor: "transparent",
      marginLeft: "10px",
      marginRight: "10px"
    }
  });

const rootStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ProfileBackgroundColor,
  borderRadius: "20px",
  border: "3px solid black",
  transition: "margin-top .5s ease-out",
  padding: "10px",
  maxWidth: "650px",
  margin: "0 auto"
};

const Profile = props => {
  const { classes, profile, tab } = props;
  if (profile) {
    return (
      <div style={{ ...rootStyle, marginTop: tab !== "none" ? "5px" : "20%" }}>
        <div>
          <img
            alt={profile.pic && profile.pic.alt}
            src={profile.pic && profile.pic.path}
            className={classes.headshot}
          />
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.name}>
            <h2 className={classes.nameTxt}>
              {profile.name && profile.name.value}
            </h2>
          </div>
          <div className={classes.blurb}>
            <i>{profile.blurb && profile.blurb.value}</i>
          </div>
          <div className={classes.quickLinks}>
            {generateButtons(classes, profile.icons)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

Profile.propTypes = {
  classes: PropTypes.any,
  profile: PropTypes.any,
  tab: PropTypes.any
};

const mapStateToProps = (state, props) => ({
  profile: state && state.config && state.config.profile,
  tab: state && state.tab && state.tab.openTab
});

const connectedProfile = connect(
  mapStateToProps,
  null
)(Profile);

export default withStyles(styles)(connectedProfile);
