function Confirmation(props) {
  return (props.trigger) ? (
  <article class="message">
    <div class="message-header">
      <p>F1 Predictor</p>
      <button class="delete" onClick={() => props.setTrigger(false)} aria-label="delete"></button>
    </div>
    <div class="message-body">
      {props.label} saved
    </div>
  </article>
  ) : "";
}

export default Confirmation;