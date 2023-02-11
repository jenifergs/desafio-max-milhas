function ButtonDelete(props) {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} className="btn btn-danger">
      {children}
    </button>
  );
}

export default ButtonDelete;