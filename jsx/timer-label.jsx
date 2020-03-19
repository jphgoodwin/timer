const Timer = (props) => {
  if (props.timeLeft == null)
    return <div/>;
  return <h1>{props.timeLeft}</h1>;
};
