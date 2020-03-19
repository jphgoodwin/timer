class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: null, timer: null, resetTime: null, 
      paused: false };
    this.startTimer = this.startTimer.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this.cancelTimer = this.cancelTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timerInterval = this.timerInterval.bind(this);
  }
  timerInterval() {
    return setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) {
        clearInterval(this.state.timer);
      }
      this.setState({ timeLeft: timeLeft });
    }, 1000);
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = this.timerInterval();
    this.setState({ timeLeft: timeLeft, timer: timer,
      resetTime: timeLeft, paused: false });
  }
  pauseResume() {
    if (this.state.timeLeft == 0 || this.state.timeLeft == null)
      return;
    if (this.state.paused) {
      let timer = this.timerInterval();
      this.setState({ timer: timer, paused: false });
    } else {
      clearInterval(this.state.timer);
      this.setState({ paused: true });
    }
  }
  cancelTimer() {
    if (this.state.timeLeft == 0 || this.state.timeLeft == null)
      return;
    clearInterval(this.state.timer);
    this.setState({ timeLeft: null, timer: null, resetTime: null,
      paused: false });
  }
  resetTimer() {
    if (this.state.resetTime == null)
      return;
    this.startTimer(this.state.resetTime)
  }
  formatTimeLeft() {
    if (this.state.timeLeft == null || this.state.timeLeft == 0)
      return null;
    if (this.state.timeLeft >= 60) {
      return `Time left: ${Math.floor(this.state.timeLeft/60)} ` +
        `minutes ${this.state.timeLeft%60} seconds`;
    } else {
      return `Time left: ${this.state.timeLeft} seconds`;
    }
  }
  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time={300} text="5 minutes"
          timerAction={this.startTimer}/>
          <Button time={600} text="10 minutes"
          timerAction={this.startTimer}/>
          <Button time={900} text="15 minutes"
          timerAction={this.startTimer}/>
        </div>
        <br/>
        <div className="btn-group" role="group">
          <Button text={this.state.paused ? "Resume" : "Pause"}
          timerAction={this.pauseResume}/>
          <Button text="Cancel"
          timerAction={this.cancelTimer}/>
          <Button text="Reset"
          timerAction={this.resetTimer}/>
        </div>
        <Timer timeLeft={this.formatTimeLeft()}/>
        <Sounder timeLeft={this.state.timeLeft}/>
      </div>
    )
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
);
