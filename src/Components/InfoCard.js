import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles, createStyles } from "@material-ui/core/styles";

import { TabEventCreator } from "../Actions/TabEvent";

import { getInfoCardContent } from "../Factory/ContentFactory";

import { TAB_STR, ProfileBackgroundColor } from "../Constants";

const windowStyle = openTab =>
  createStyles({
    root: {
      display: openTab === "none" ? "none" : "flex",
      backgroundColor: ProfileBackgroundColor,
      flexDirection: "row",
      border: "1px solid black",
      minHeight: "500px",
      marginTop: "2%",
      marginBottom: "-2%",
      borderRadius: "40px",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "75%",
      position: "relative",
      bottom: "3%"
    }
  });

const styles = () =>
  createStyles({
    exitIcon: {
      position: "absolute",
      top: "3%",
      right: "3%"
    }
  });

function InfoCard(props) {
  const rootEl = React.useRef(null);
  const { tabs, currentTab, classes } = props;

  return (
    <div ref={rootEl} style={windowStyle(currentTab).root}>
      {getInfoCardContent(tabs, currentTab, TAB_STR)}
      <IconButton onClick={() => props.hideTab()} className={classes.exitIcon}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}

InfoCard.propTypes = {
  tabs: PropTypes.object,
  currentTab: PropTypes.string,
  classes: PropTypes.any
};

const mapStateToProps = (state, props) => ({
  currentTab: state && state.tab && state.tab.openTab,
  tabs:
    state && state.config && state.config.profile && state.config.profile.tabs
});

const mapDispatchToProps = {
  hideTab: TabEventCreator.hideTab
};

const connectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCard);

export default withStyles(styles)(connectedCard);
