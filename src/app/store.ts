import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { authApi } from '../features/auth/authAPI';
import imageReducer from '../features/thecatapi/thecatapiSlice';
import { imageApi } from '../features/thecatapi/thecatapiAPI';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
