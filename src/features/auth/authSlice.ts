import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from './user.model';
import { authApi } from './authAPI';

/**
 * Authentications store state.
 */
export interface AuthState {
  /**
   * The currently authenticated user or null.
   * @default null
   */
  user: User | null

  /**
   * The API authentication token.
   * @default null
   */
  token: string | null
}

/**
 * The store initial state.
 */
const initialState: AuthState = {
  user: null,
  token: null,
};

/**
 * Slice for creating logout reducer and capturing login action.
 */
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

/**
 * Get the currently authenticated user object.
 *
 * @param state App state.
 * @returns Currently authenticated user or null.
 */
export const selectCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer;
