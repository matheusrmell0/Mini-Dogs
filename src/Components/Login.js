import React from 'react';
import styles from './Login.module.css';
import { login } from '../store/login';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Helper/Loading';

const Login = () => {
  const { data, loading, error } = useSelector((state) => state.login.user);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  if (loading) return <Loading />;
  else
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
          {loading ? (
            <button disabled className={`${styles.btn2}`}>
              Entrar
            </button>
          ) : (
            <button className={`${styles.btn}`}>Entrar</button>
          )}
          {error && <p>{error?.message}</p>}
        </form>
      </>
    );
};

export default Login;
