import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../app/store';
import { Cat } from "./cat.model";

export type CatPageResponse = {

  page: number

  pageCount: number

  cats: Cat[]
}

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: 'catApi',
  tagTypes: ['Cat'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('x-api-key', token)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCatsByPage: builder.query<Cat[], number>({
      query: (page) => `images?format=JSON&include_favourite=1&include_vote=1&limit=10&page=${page-1}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cat' as const, id })),
              { type: 'Cat', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Cat', id: 'PARTIAL-LIST' }],
    }),
    addCat: builder.mutation<Cat, FormData>({
      query: (body) => ({
        url: `images/upload`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cat', id: 'PARTIAL-LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCatsByPageQuery,
  useAddCatMutation,
} = catApi
