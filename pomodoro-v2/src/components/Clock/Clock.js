import React from "react";
import { connect } from "react-redux";

import "./clock.css";
import { updateTask } from "../../actions";

class Clock extends React.Component {
  state = {
    isBreak: false,
    breakTime: this.props.settings.breakTime * 60,
    activeTime: this.props.settings.activeTime * 60,
    timeRemaining: 0,
    isCounting: false,
  };

  startTimer() {
    this.myInterval = setInterval(async () => {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 });
      if (this.state.timeRemaining <= 0) {
        if (!this.state.isBreak && this.props.selectedTask.pomodoroCount) {
          const { id, pomodoroCount } = this.props.selectedTask;
          this.props.updateTask(id, pomodoroCount - 1);
        }
        console.log(`isBreak: ${this.state.isBreak}`);
        await this.setState({ isBreak: !this.state.isBreak });
        console.log(`isBreak: ${this.state.isBreak}`);
        this.resetTimer();
      }
    }, 1000);

    this.setState({ isCounting: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isCounting: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setTime();
  }

  toggleTimer = () => {
    if (!this.state.isCounting) {
      this.startTimer();
    } else {
      this.resetTimer();
    }
  };

  renderButton() {
    return (
      <button
        className={this.state.isCounting ? "red" : ""}
        onClick={this.toggleTimer}
        style={this.buttonStyle}
      >
        Start
      </button>
    );
  }

  setTime() {
    if (this.state.isBreak) {
      this.setState({ timeRemaining: this.state.breakTime });
    } else {
      this.setState({ timeRemaining: this.state.activeTime });
    }
  }

  componentDidMount() {
    this.setTime();
  }

  containerStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: ".77fr .23fr",
  };

  timeStyle = {
    fontSize: "20rem",
    fontFamily: "var(--secondaryFont)",
    height: "15px",
    letterSpacing: "1.5rem",
    textAlign: "center",
    marginTop: "-6.5rem",
  };

  buttonStyle = {
    alignSelf: "center",
    justifySelf: "center",
    height: "80%",
    width: "90%",
    color: "var(--primaryGreen)",
    border: "1px solid var(--primaryGreen)",
    background: "none",
    borderRadius: "50px",
    fontFamily: "var(--primaryFont)",
    letterSpacing: "var(--primarySpacing)",
    fontSize: "3rem",
  };

  renderTime() {
    let minutes = Math.floor(this.state.timeRemaining / 60);
    let seconds = this.state.timeRemaining % 60;

    return `${minutes <= 9 ? "0" + minutes : minutes}:${
      seconds <= 9 ? "0" + seconds : seconds
    }`;
  }

  render() {
    return (
      <div style={this.containerStyle}>
        <span style={this.timeStyle}>{this.renderTime()}</span>
        <button
          className={this.state.isCounting ? "red" : ""}
          onClick={this.toggleTimer}
          style={
            this.state.isCounting
              ? {
                  ...this.buttonStyle,
                  color: "var(--primaryRed)",
                  border: "1px solid var(--primaryRed)",
                }
              : this.buttonStyle
          }
        >
          {this.state.isCounting ? "Interrupt" : "Start"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedTask: state.selectedTask, settings: state.settings };
};

export default connect(mapStateToProps, { updateTask })(Clock);
