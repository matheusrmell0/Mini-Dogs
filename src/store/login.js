import createAsyncSlice from './helper/createAsyncSlice';
import { TOKEN_POST, USER_GET } from '../api';
import { combineReducers } from '@reduxjs/toolkit';
import getLocalStorage from './helper/getLocalStorage';
import { removePhotos } from './photos';

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null),
    },
  },
  reducers: {
    removeToken(state) {
      state.data = null;
    },
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token,
            },
          },
        };
      },
    },
  },
  fetchConfig: (user) => {
    const { url, options } = TOKEN_POST(user);
    return { url, options };
  },
});

const user = createAsyncSlice({
  name: 'user',
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
  fetchConfig: (token) => {
    const { url, options } = USER_GET(token);
    return { url, options };
  },
});

const { removeToken } = token.actions;
const { removeUser } = user.actions;
const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const reducer = combineReducers({ token: token.reducer, user: user.reducer });
export default reducer;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) {
      await dispatch(fetchUser(payload.token));
    }
  } catch {}
};

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.login.token.data;
  if (token) {
    await dispatch(fetchUser(token));
  }
};

export const logout = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  dispatch(removePhotos())
  window.localStorage.removeItem('token');
};
