import React from 'react';
import styles from './Header.module.css';
import { logout } from '../store/login';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);

  function handleClick() {
    console.log('PROCURAR SOLUCAO PARA LOGOUT');
    window.localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <header className={`${styles.header} container`}>
      <nav>
        <ul>
          <li>Mini Dogs</li>
          <li>
            {data ? (
              <button
                onClick={handleClick}
                className={`${styles.btnDisabled}`}
              ></button>
            ) : (
              <button
                disabled
                className={`${styles.btn}`}
              ></button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
