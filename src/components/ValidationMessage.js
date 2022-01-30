function ValidationMessage(props) {
  return (props.errorMessage && props.errorForm === props.source) ?
    <div class="notification is-danger">
        {props.errorMessage}
    </div>
  : "";
}

export default ValidationMessage;