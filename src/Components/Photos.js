import React from 'react';
import { fetchPhotos } from '../store/photos';
import { useDispatch, useSelector } from 'react-redux';
import PhotosContent from './PhotosContent';

const Photos = () => {
  const {data} = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <>
    {data && <PhotosContent data={data}/>}
    </>
  );
};

export default Photos;
