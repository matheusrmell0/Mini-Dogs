import React from 'react';
import PhotosContent from './PhotosContent';
import PhotosLoadMore from './PhotosLoadMore';

const Photos = () => {
  return (
    <>
      <section>
        <PhotosContent />
        <PhotosLoadMore />
      </section>
    </>
  );
};

export default Photos;
