function Confirmation(props) {
  // todo refactor 'misc'
  return (props.trigger) ? (
  <article class="message">
    <div class="message-header">
      <p>F1 Predictor</p>
      <button class="delete" onClick={() => props.setTrigger(false)} aria-label="delete"></button>
    </div>
    <div class="message-body">
      {props.label} saved. {props.misc} 
    </div>
  </article>
  ) : "";
}

export default Confirmation;