import  { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

import './App.css'

function App() {

  const [comentario, setComentario] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const comentarioPost = async e => {
    e.preventDefault();

    const novoComentario = {
      name: name,
      email: email,
      body: body
    };

    useEffect(() => {
      fetchForm()
      }, []);

    const fetchForm = async () => {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', novoComentario);
      console.log(response.data);
      setName('');
      setEmail('');
      setBody('');
    }
  }


  useEffect(() => {
    fetchComentarios();
    }, []);
  
  const fetchComentarios = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setComentario(response.data);
  }
  
  return (
    <>
      <div>
        <h1>Comentario</h1>
        <form >
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)}/>
        <button onClick={comentarioPost}> Comentar </button>
        </form>
    </div>
      
    {
      comentario.map(comentario => {
     return(
      <Card
      key={comentario.id}
      nome={comentario.name}
      email={comentario.email}
      body={comentario.body}
      />
     );

      }
        
    )
    }
     
    </>
  )
}

export default App
