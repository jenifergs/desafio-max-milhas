function RestrictList ({arrayCustomers}) {
function formatDate (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  }

  return (
    <ul>
      {
        arrayCustomers.map((customer, index) => {
          return <li key={index}>CPF: {customer.cpf} / Criado Em: {formatDate(new Date(customer.createdAt))}</li>
        })
      }
    </ul>
  )
}

export default RestrictList;