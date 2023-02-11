function ButtonCreate(props) {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} className="btn btn-success">
      {children}
    </button>
  );
}


export default ButtonCreate;