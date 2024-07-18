import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const inputName = useRef(null);
  const inputAge = useRef(null);
  const inputEmail = useRef(null);

  async function getUsers() {
    try {
      const response = await api.get('/usuarios');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  async function createUsers() {
    const name = inputName.current.value;
    const age = inputAge.current.value;
    const email = inputEmail.current.value;

    if (!name || !age || !email) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    try {
      const newUser = {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      };

      // Envia os dados para a API criar o usuário
      await api.post('/usuarios', newUser);
      
      // Atualiza a lista de usuários
      getUsers();

      // Limpa os campos do formulário após o cadastro
      inputName.current.value = '';
      inputAge.current.value = '';
      inputEmail.current.value = '';
      setErrorMessage(''); // Limpa mensagem de erro

    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setErrorMessage('  Insira um usuário válido.');
    }
  }

  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      
      // Atualiza a lista de usuários
      getUsers();
    } catch (error) {
      console.error(`Erro ao deletar usuário com ID ${id}:`, error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputName} />
        <input name='idade' type='number' placeholder='Idade' ref={inputAge} />
        <input name='email' type='email' placeholder='Email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>

      {users.map(user => (
        <div className='user-card' key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt='Delete' />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
