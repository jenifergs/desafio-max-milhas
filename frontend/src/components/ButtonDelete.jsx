function ButtonDelete({cpf}) {

  const handleClick = async () => {
    const options = {method: 'DELETE',
     headers: {'Content-Type': 'application/json'}};

    const response = await fetch(`http://localhost:3333/cpf/${cpf}`, options)

    if(response.status === 204 ) {
      alert('Deletado com sucesso')
    } else {
      const data = await response.json();      
      alert(data.message)
    }
  
  };
  return (
    <button
      onClick={ handleClick }
      className="btn-remove">
      Deletar
    </button>
  );
}

export default ButtonDelete;