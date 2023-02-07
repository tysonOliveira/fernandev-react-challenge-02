import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// >>> Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [novoTexto, setNovoTexto] = useState('');
  const [novoPassword, setNovoPassword] = useState('');

  function handleEmail(event) {
    setNovoTexto(event.target.value);
    console.log(novoTexto);
  }

  function handlePassword(event) {
    setNovoPassword(event.target.value);
    console.log(novoPassword);
  }

  function handleSubmit() {
    setEmail([...email, novoTexto]);
    setNovoTexto('');
    setPassword([...password, novoPassword]);
    setNovoPassword('');

    const data = login({ email, password })
      .then(response => { return response })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      })
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMessage && <div className='errorMessage'>{errorMessage.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input
            id={'email'}
            type={'email'}
            value={novoTexto}
            onChange={handleEmail}
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input
            id={'password'}
            type={'password'}
            value={novoPassword}
            onChange={handlePassword}
          />
        </div>

        <div className='button'>
          <button
            onClick={handleSubmit}
            disabled={novoTexto === '' || novoPassword.length < 6}
          >
            Login</button>
        </div>
      </div>
    </div>
  );
}
