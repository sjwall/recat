import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from './user.model';
import { authApi } from './authAPI';

export interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
      }
    )
  },
});

export const { logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer;
