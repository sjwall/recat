import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { catApi } from './thecatapiAPI';

export interface AuthState {
  totalPages: number
}

const initialState: AuthState = {
  totalPages: 0
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      catApi.endpoints.getCatsByPage.matchFulfilled,
      (state, reducer) => {
        state.totalPages = (reducer.meta.baseQueryMeta as any).response.headers.get('pagination-count')
      }
    )
  },
});

export const selectTotalPages = (state: RootState) => state.images.totalPages;

export default imagesSlice.reducer;
