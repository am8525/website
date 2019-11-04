import React from "react";

import PropTypes from "prop-types";

import ProfileBackgroundColor from "../Constants";
import { createStyles } from "@material-ui/core/styles";

const styling = () =>
  createStyles({
    inner: {
      backgroundColor: ProfileBackgroundColor,
      display: "inline-block",
      maxWidth: "20%",
      clipPath: "polygon(0%, 100%, 15%, 0%, 85%, 0%, 100%, 100%)"
    },
    outer: {
      display: "inline-block",
      maxWidth: "20%",
      clipPath: "polygon(0%, 100%, 15%, 0%, 85%, 0%, 100%, 100%)",
      transform: "scale(0.98, 0.95)",
      backgroundColor: "black"
    },
    btn: {
      display: "inline-block",
      position: "relative",
      width: "auto",
      maxWidth: "20%",
      textAlign: "center"
    },
    btnBag: {
      display: "flex",
      justifyContent: "flex-start"
    }
  });

function SubTab(props) {
  return (
    <div style={styling.outer}>
      <div style={styling.inner}>
        <span style={styling.btn}>
          <p>{props.btnText}</p>
        </span>
      </div>
    </div>
  );
}

function SubTabList(props) {
  const { sectionConfig } = props;
  return (
    <div style={styling.btnBag}>
      {Object.keys(sectionConfig).map(subSect => {
        return <SubTab btnText={subSect} />;
      })}
    </div>
  );
}

SubTabList.propTypes = {
  sectionConfig: PropTypes.object.isRequired
};

export default SubTabList;
