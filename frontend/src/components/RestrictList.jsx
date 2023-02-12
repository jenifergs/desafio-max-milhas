function RestrictList ({arrayCustomers}) {

  return (
    <ul>
      {
        arrayCustomers.map((customer, index) => {
          return <li key={index}>CPF: {customer.cpf}
           - Criado Em: {customer.createdAt}</li>
        })
      }
    </ul>
  )
}

export default RestrictList;