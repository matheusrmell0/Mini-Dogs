import createAsyncSlice from './helper/createAsyncSlice';
import { PHOTOS_API } from '../api';

const photos = createAsyncSlice({
  name: 'photos',
  fetchConfig: () => {
    const { url, options } = PHOTOS_API();
    return { url, options };
  },
});

export const fetchPhotos = photos.asyncAction
export default photos.reducer