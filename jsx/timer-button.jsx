const Button = (props) => {
  return <button type="button" className='btn-default btn'
  onClick={() => {props.timerAction(props.time)}}>
    {props.text}
  </button>;
};
