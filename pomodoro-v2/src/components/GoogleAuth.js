import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "775280425442-6043b18epmcaltnl724rn2o7ob201191.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen((isSignedIn) => {
            this.onAuthChange(isSignedIn);
          });
        });
    });
  }

  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  buttonStyle = {
    background: "var(--primaryRed)",
    fontWeight: "bold",
    fontFamily: "var(--primaryFont)",
    letterSpacing: "var(--primarySpacing)",
    color: "var(--primaryWhite)",
    borderRadius: "50px",
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: ".315rem .630rem",
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Loading...</div>;
    } else {
      return (
        <button
          onClick={this.props.isSignedIn ? this.signOut : this.signIn}
          style={this.buttonStyle}
        >
          <i
            style={{
              fontSize: "2rem",
              marginRight: ".75rem",
              color: "var(--primaryWhite)",
            }}
            className="fab fa-google"
          ></i>{" "}
          {this.props.isSignedIn ? "Sign Out" : "Login with Google"}
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
