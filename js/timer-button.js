const Button = props => {
  return React.createElement(
    "button",
    { type: "button", className: "btn-default btn",
      onClick: () => {
        props.timerAction(props.time);
      } },
    props.text
  );
};