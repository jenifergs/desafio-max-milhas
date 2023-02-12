import ButtonCreate from '../components/ButtonCreate';
import ButtonDelete from '../components/ButtonDelete';
import ButtonSearch from '../components/ButtonSearch';
import Input from '../components/Input';
import { useState } from 'react';
import RestrictList from '../components/RestrictList';

function Home () {
  const [cpf, setCpf] = useState('');
  const [arrayCustomers, setArrayCustomers] = useState([]);

  const handleChange = (event) => {
    setCpf(event.target.value);
  };

  return (
    <main>
      <h1>Sistema Antifraude</h1>
      <p>Adicione, remova ou pesquise CPFs </p>
      <div>
        <Input
        value={ cpf }
        onChange={ handleChange} />
        <br />
        <div className='container-btn'>
        <ButtonCreate cpf={cpf} />
        <ButtonDelete cpf={cpf} />
        <ButtonSearch
         cpf={cpf}
         setArrayCustomers={setArrayCustomers}


         />
        </div>
      </div>
    <div>
        <h2>Lista de CPFs restritos</h2>
        <RestrictList
        arrayCustomers={arrayCustomers}
         />
    </div>
    </main>
  )
}

export default Home;