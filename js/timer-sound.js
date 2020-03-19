const Sounder = props => {
  if (props.timeLeft == 0) {
    document.getElementById('end-of-time').play();
  }
  return React.createElement("audio", { id: "end-of-time", src: "flute_c_long_01.wav",
    preload: "auto" });
};