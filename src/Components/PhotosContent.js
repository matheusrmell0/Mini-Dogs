import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPhotos } from '../store/photos';
import styles from './PhotosContent.module.css';

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <ul className={`${styles.photos} container`}>
      {list.map((photo) => (
        <li key={`${photo.id * Math.random()}`} className={`${styles.photo}`}>
          <img src={photo.src} alt={photo.title} />
          <div className={`${styles.speecs}`}>
            <h1>{photo.title}</h1>
            <span>{photo.acessos}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhotosContent;
