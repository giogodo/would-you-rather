import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";
import Button from "muicss/lib/react/button";
import notFoundImage from '../images/notfound.png'

const mainPanelStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  margin: 10,
  maxWidth: 620,
  flexDirection: "column"
};
const headerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  marginBottom: 10,
  padding: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const buttonStyle = {
  maxWidth: 300,
  alignSelf: "center"
};

class NotFound extends Component {
  state = {
    toHome: false
  };

  handleClick = e => {
    this.setState(() => ({
      toHome: true
    }));
  };

  render() {
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-display1">
            <b>Oooooops!!!</b>
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <div>
            <img
              src={notFoundImage}
              alt={"NotFound"}
              height="500"
              width="500"
            />
          </div>
          <Button
            color="primary"
            onClick={this.handleClick}
            style={buttonStyle}
          >
            Return to Home
          </Button>
        </div>
      </Panel>
    );
  }
}

export default NotFound;
