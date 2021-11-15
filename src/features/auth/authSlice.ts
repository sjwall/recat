import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from './user.model';
import { api } from './authAPI';

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
      }
    )
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer;
