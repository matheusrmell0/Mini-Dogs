import React from 'react';
import styles from './Header.module.css';
import { logout } from '../store/login';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.login.user);

  return (
    <header className={`${styles.header} container`}>
      <nav>
        <ul>
          <li>Mini Dogs</li>
          <li>
            {loading ? (
              <button
                disabled
                className={`${styles.btn} 
              ${loading ? styles.loading : ''}
              ${data ? styles.loaded : ''}
              `}
              ></button>
            ) : (
              <button
                onClick={() => dispatch(logout())}
                className={`${styles.btn} 
                ${loading ? styles.loading : ''}
                ${data ? styles.loaded : ''}
                `}
              ></button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
