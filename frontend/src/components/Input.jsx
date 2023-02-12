function Input({value, onChange}) {

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(event) => onChange(event)}
      placeholder="Digite o cpf"
    />
  );
}

export default Input;