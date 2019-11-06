import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoadConfigActionCreator } from "../Actions/LoadConfigEvent";

/**
 * empty div component that is used to push config data to the app state.
 */

const jsonData = require("../Config/config.json");

class DataRef extends React.Component {
  render() {
    return <div />;
  }
  componentDidMount() {
    this.props.dataRef(jsonData);
  }
}

const mapDispatchToProps = {
  dataRef: LoadConfigActionCreator.dataRef
};

DataRef.propTypes = {
  dataRef: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(DataRef);
