import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { catApi } from './thecatapiAPI';

/**
 * The image slice state.
 */
export interface ImageState {
  /**
   * The total pages available to view.
   */
  totalPages: number
}

/**
 * Slice initial state.
 */
const initialState: ImageState = {
  totalPages: 0
};

/**
 * Slice for extracting the total page count from the image requests.
 */
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

/**
 * Get the total pages available to display.
 *
 * @param state Root state.
 * @returns The total pages.
 */
export const selectTotalPages = (state: RootState) => state.images.totalPages;

export default imagesSlice.reducer;
