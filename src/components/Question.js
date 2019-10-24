import React, { Component } from "react";
//import { connect } from "react-redux";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";

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
  marginBottom: 10,
  padding: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: "flex",
  alignItems: "center"
};

class Question extends Component {
  render() {
    const temporalAnswered = false;
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-headline">
            <b>Tyler McGinnis asks:</b>
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <img
            src={"https://api.adorable.io/avatars/285/tylermcginnis.png"}
            alt={"Avatar"}
            height="180"
            width="180"
            style={{
              marginTop: 25,
              marginBottom: 25,
              marginRight: 25,
              borderRadius: 10
            }}
          />
          <div
            style={{
              flex: 1
            }}
          >
            <div
              className="mui--text-display1"
              style={{
                marginTop: 20,
                marginBottom: 20
              }}
            >
              <b>Results:</b>
            </div>
            <Panel
              style={{
                marginBottom: 25,
                padding: 28,
                height: 120,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="mui--text-subhead">
                  Would you rather find $50 yourself?
                </div>
              </div>
              <Divider />
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="mui--text-subhead">
                  2 out of 3 votes
                </div>
              </div>
            </Panel>
            <Panel
              style={{
                marginBottom: 25,
                padding: 28,
                height: 120,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="mui--text-subhead">
                  Would you rather have your best friend find $500?
                </div>
              </div>
              <Divider />
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="mui--text-subhead">
                  1 out of 3 votes
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </Panel>
    );
  }
}

export default Question;
