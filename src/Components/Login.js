import React from 'react';
import styles from './Login.module.css';
import { login } from '../store/login';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({username, password}));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.form} container`}>
        <label className={`${styles.label}`} id="username">
          Usúario
          <input
            type="text"
            value={username}
            id="username"
            name="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label className={`${styles.label}`} id="password">
          Senha
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button className={`${styles.btn}`}>Entrar</button>
      </form>
    </>
  );
};

export default Login;
