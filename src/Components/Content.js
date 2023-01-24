import React from 'react';
import Login from './Login';
import Photos from './Photos';
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin } from '../store/login';

const Content = () => {
  const { data } = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return <>{data ? <Photos /> : <Login />}</>;
};

export default Content;
