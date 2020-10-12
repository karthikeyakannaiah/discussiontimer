import React, { Component } from "react";
class DisTimer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    color: "grey",
    am: "",
    as: "",
    a1m: "",
    a1s: "",
    a2m: "",
    a2s: "",
    dm: "",
    ds: "",
    set: false,
    msg: "Start",
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: parseInt(value) });
  };
  handleSet = () => {
    let bool = this.state.set;
    this.setState({ set: !bool });
    console.log(this.state);
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
      const { timerTime } = this.state;
      //let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
      let seconds = Math.floor(timerTime / 1000) % 60;
      let minutes = Math.floor(timerTime / 60000) % 60;
      //let hours = Math.floor(timerTime / 3600000);
      if (seconds === this.state.as && minutes === this.state.am) {
        this.setState({ color: "#00b300", msg: "Alert 1" });
      }
      if (seconds === this.state.a1s && minutes === this.state.a1m) {
        this.setState({ color: "#ffff00", msg: "Alert 2" });
      }
      if (seconds === this.state.a2s && minutes === this.state.a2m) {
        this.setState({ color: "#ff6600", msg: "Alert 3" });
      }
      if (seconds === this.state.ds && minutes === this.state.dm) {
        this.setState({ color: "#ff1a1a", msg: "Disqualified" });
      }
    }, 10);
  };
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.stopTimer();
    this.setState({
      timerStart: 0,
      timerTime: 0,
      color: "grey",
      msg: "Start",
    });
  };
  render() {
    const { timerTime } = this.state;
    //let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <React.Fragment>
        <div className="container" style={{ textAlign: "center" }}>
          <h1
            className="text"
            style={{ textAlign: "center", backgroundColor: this.state.color }}
          >
            <div className="Stopwatch-display text text-light">
              {hours} : {minutes} : {seconds}
            </div>
          </h1>
          <h5 style={{ color: this.state.color }}>{this.state.msg}</h5>
          <button onClick={this.startTimer} className="btn btn-primary">
            start
          </button>
          <button onClick={this.stopTimer} className="btn btn-danger">
            stop
          </button>
          <button onClick={this.resetTimer} className="btn btn-warning">
            reset
          </button>
        </div>
        <br />
        <div
          className="input-group container justify-content-center"
          style={{ textAlign: "center" }}
        >
          <label>
            set alert 1:
            <input
              type="number"
              className="input-group"
              placeholder="min"
              name="am"
              value={this.state.am}
              onChange={this.handleChange}
            ></input>
            <input
              type="number"
              className="input-group"
              placeholder="sec"
              name="as"
              value={this.state.as}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            set alert 2:
            <input
              type="number"
              className="input-group"
              placeholder="min"
              name="a1m"
              value={this.state.a1m}
              onChange={this.handleChange}
            ></input>
            <input
              type="number"
              className="input-group"
              placeholder="sec"
              name="a1s"
              value={this.state.a1s}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            set alert 3:
            <input
              type="number"
              className="input-group"
              placeholder="min"
              name="a2m"
              value={this.state.a2m}
              onChange={this.handleChange}
            ></input>
            <input
              type="number"
              className="input-group"
              placeholder="sec"
              name="a2s"
              value={this.state.a2s}
              onChange={this.handleChange}
            ></input>
          </label>

          <label>
            set disqualification:
            <input
              type="number"
              className="input-group"
              placeholder="min"
              name="dm"
              value={this.state.dm}
              onChange={this.handleChange}
            ></input>
            <input
              type="number"
              className="input-group"
              placeholder="sec"
              name="ds"
              value={this.state.ds}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div
          className="container justify-content-center"
          style={{ textAlign: "center" }}
        >
          <button onClick={this.handleSet} className="btn btn-success">
            Set Rules
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default DisTimer;
// green 1 yellow 2 orange 3 red
