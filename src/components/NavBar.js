import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Appbar from "muicss/lib/react/appbar";

const mainContainerStyle = {
  display: "flex",
  verticalAlign: "middle",
  justifyContent: "space-between"
};
const leftContainerStyle = {
  display: "flex",
  paddingLeft: 40
};
const rightContainerStyle = {
  display: "flex",
  paddingRight: 40
};
const fadeButtonStyle = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  color: "#9cd3ff",
  paddingRight: 15,
  paddingLeft: 15
};
const whiteButtonStyle = {
  ...fadeButtonStyle,
  color: "white"
};
const imageStyle = {
  borderRadius: 8,
  alignSelf: "center"
};

class NavBar extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <Appbar>
        <table width="100%">
          <tbody>
            <tr style={mainContainerStyle}>
              <td className="mui--appbar-height" style={leftContainerStyle}>
                <Link to="/">
                  <div style={fadeButtonStyle}>
                    <div className="mui--text-subhead">
                      <b>Home</b>
                    </div>
                  </div>
                </Link>
                <Link to="/add">
                  <div style={fadeButtonStyle}>
                    <div className="mui--text-subhead">
                      <b>New Question</b>
                    </div>
                  </div>
                </Link>
                <Link to="/login">
                  <div style={fadeButtonStyle}>
                    <div className="mui--text-subhead">
                      <b>Leader Board</b>
                    </div>
                  </div>
                </Link>
              </td>
              {authedUser && (
                <td className="mui--appbar-height" style={rightContainerStyle}>
                  <div style={whiteButtonStyle}>
                    <div className="mui--text-subhead">
                      <b>Hello, {users[authedUser].name}</b>
                    </div>
                  </div>
                  <img
                    src={users[authedUser].avatarURL}
                    alt={"Avatar"}
                    height="50"
                    width="50"
                    style={imageStyle}
                  />
                  <Link to="/login">
                    <div style={whiteButtonStyle}>
                      <div className="mui--text-subhead">
                        <b>Logout</b>
                      </div>
                    </div>
                  </Link>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </Appbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(NavBar);
