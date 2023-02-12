function ButtonSearch({cpf, setArrayCustomers}) {

  const handleClick = async () => {
    console.log(cpf)
    const url = `http://localhost:3333/cpf/${cpf}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();

    if(response.status === 200) {
      if(Array.isArray(data)) {
        setArrayCustomers(data);
      } else {
        setArrayCustomers([data]);
      }


    } else {
      alert(data.message)
    }


  }


  return (
    <div>
      <button
       className="btn-search"
       onClick={ handleClick }
       type="button">
          Buscar
      </button>
    </div>
  );
}

export default ButtonSearch;