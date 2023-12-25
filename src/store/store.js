import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../services/userSlice';
// import api from '../services/api';
import {baseApi} from '../services/api';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
