import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from './user.model'

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
