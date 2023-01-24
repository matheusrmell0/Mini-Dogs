import React from 'react';
import styles from './PhotosContent.module.css';

const PhotosContent = ({ data }) => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    setPhotos(data);
  }, [data]);

  return (
    <section className={`${styles.photos} container`}>
      {photos.map((photo) => (
        <div key={photo.id} className={`${styles.photo}`}>
          <img src={photo.src} alt={photo.title} />
          <div className={`${styles.speecs}`}>
            <h1>{photo.title}</h1>
            <span>{photo.acessos}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PhotosContent;
