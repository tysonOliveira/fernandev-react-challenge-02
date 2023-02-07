import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// Feito >>> O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// Feito >>> Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// Feito >>> Desabilite o botão de Login equanto você está executando o login.
// Feito >>> Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// >>> Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);

  function handleEmail(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handlePassword(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    setErrorMessage('');
    setIsRequesting(true);

    let values = { ...data }

    login(values)
      .then(() => alert("success!"))
      .catch(error => setErrorMessage(error))
      .finally(() => setIsRequesting(false));

    setData({
      email: '',
      password: ''
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
            name={'email'}
            type={'email'}
            value={data.email}
            onChange={handleEmail}
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input
            id={'password'}
            name={'password'}
            type={'password'}
            value={data.password}
            onChange={handlePassword}
          />
        </div>

        <div className='button'>
          <button
            onClick={handleSubmit}
            disabled={data.email === '' || data.password.length < 6 || isRequesting}
          >
            Login</button>
        </div>
      </div>
    </div >
  );
}
