

function Input({ name, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Digite o cpf"
    />
  );
}

export default Input;