/**
 * NOTE!
 *
 * As of release v0.1.2, this component is not being used.
 *
 * We will keep it around to incorporate an animated background at a later time.
 */

import React from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    backRoot: {
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: "-1",
      width: "100%",
      height: "100%"
    }
  });

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    const { classes } = this.props;

    if (this.effect) {
      return <div className={classes.backRoot} ref={this.myRef} />;
    } else {
      return (
        <div className={classes.backRoot}>
          <img src="images/nature.jpeg" alt="Nature" />
        </div>
      );
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
}

export default withStyles(styles)(Background);
