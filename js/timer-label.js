const Timer = props => {
  if (props.timeLeft == null) return React.createElement("div", null);
  return React.createElement(
    "h1",
    null,
    props.timeLeft
  );
};