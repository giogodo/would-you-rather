import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
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
    const path = this.props.location.pathname;
    const { authedUser, users, dispatch } = this.props;
    return (
      <Appbar>
        <table width="100%">
          <tbody>
            <tr style={mainContainerStyle}>
              <td className="mui--appbar-height" style={leftContainerStyle}>
                <Link to="/">
                  <div
                    style={path === "/" ? whiteButtonStyle : fadeButtonStyle}
                  >
                    <div className="mui--text-subhead">
                      <b>Home</b>
                    </div>
                  </div>
                </Link>
                <Link to="/add">
                  <div
                    style={path === "/add" ? whiteButtonStyle : fadeButtonStyle}
                  >
                    <div className="mui--text-subhead">
                      <b>New Question</b>
                    </div>
                  </div>
                </Link>
                <Link to="/leaderboard">
                  <div
                    style={
                      path === "/leaderboard"
                        ? whiteButtonStyle
                        : fadeButtonStyle
                    }
                  >
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
                  <Link
                    to="/login"
                    onClick={() => {
                      dispatch(setAuthedUser(null));
                    }}
                  >
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

function mapStateToProps({ authedUser, users }, props) {
  return {
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
