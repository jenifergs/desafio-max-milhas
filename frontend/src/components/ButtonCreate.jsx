function ButtonCreate({ cpf }) {

  const handleClick = async () => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ cpf }),
    };
    
  const response =  await fetch('http://localhost:3333/cpf', options)
  const data = await response.json();
  if(response.status === 201){
    alert('cpf cadastrado no banco de dados com sucesso')
  } else {
    alert(data.message)
  }
  };
 
  return (
    <button
      onClick={ handleClick }
     className="btn-create">
      Adicionar
    </button>
  );
}


export default ButtonCreate;