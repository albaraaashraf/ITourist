import "./Input.css";
function Input(props) {
  return (
    <div className="label-input">
      <label htmlFor={props.input.id} className={`me-3 ${props.labelStyle}`}>
        {props.label}
      </label>
      <input
        {...props.input}
        onChange={props.onChange}
        style={props.style}
      ></input>
    </div>
  );
}
export default Input;
