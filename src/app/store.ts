import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { authApi } from '../features/auth/authAPI';
import imageReducer from '../features/thecatapi/thecatapiSlice';
import { catApi } from '../features/thecatapi/thecatapiAPI';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [catApi.reducerPath]: catApi.reducer,
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
