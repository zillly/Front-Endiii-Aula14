import  { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

import './App.css'

function App() {

  const [cadastro, setCadastro] = useState([]);


  useEffect(() => {
    fetchCadastro();
    }, []);
  
  const fetchCadastro = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setCadastro(response.data);
    console.log(fetchCadastro);
  }
  
  return (
    <>
    {
      cadastro.map(cadastro => {
     return(
      <Card
      nome={cadastro.name}
      email={cadastro.email}
      body={cadastro.body}
      />
     );

      }
        
    )
    }
     
    </>
  )
}

export default App
