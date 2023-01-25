import createAsyncSlice from './helper/createAsyncSlice';
import { PHOTOS_API } from '../api';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    pages: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.pages++;
      if (action.payload.length === 0) {
        state.infinite = false;
      }
    },
    removePhotos(state) {
      state.pages = 0;
      state.infinite = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (page) => {
    const { url, options } = PHOTOS_API(page);
    return { url, options };
  },
});

export const fetchPhotos = photos.asyncAction;
export default photos.reducer;
export const { addPhotos, removePhotos } = photos.actions;

export const loadPhotos = (page) => async (dispatch) => {
  const { payload } = await dispatch(fetchPhotos(1));
  await dispatch(addPhotos(payload));
};
