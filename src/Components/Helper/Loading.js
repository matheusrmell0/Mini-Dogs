import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <>
      <div className={`${styles.wrapper} container`}>
        <span className={`${styles.loading} container`}></span>
      </div>
    </>
  );
};

export default Loading;
