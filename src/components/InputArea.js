const InputArea = ({ value, onChange, onSubmit, day }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your input here"
      />
      <button onClick={onSubmit}>Show Input in Console</button>
    </div>
  );
}

export default InputArea;