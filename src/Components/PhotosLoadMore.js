import React from 'react';
import styles from './PhotosLoadMore.module.css';
import { loadPhotos } from '../store/photos';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Helper/Loading';

const PhotosLoadMore = () => {
  const { pages, infinite, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  if (loading) return <Loading />;
  if (!infinite) return null;
  return (
    <div className="container">
      {!loading ? (
        <button
          onClick={() => {
            if (infinite) dispatch(loadPhotos(pages + 1));
          }}
          className={styles.button}
        >
          +
        </button>
      ) : (
        <button disabled className={styles.button}>
          +
        </button>
      )}
    </div>
  );
};

export default PhotosLoadMore;
