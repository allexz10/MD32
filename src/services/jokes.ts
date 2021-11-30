// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type AllCategories = {
  error: boolean,
  categories: string[],
}

type Jokes = {
  error: boolean,
  jokes: [
    {
      category: string,
      type: string,
      joke: string,
      id: number,
      safe: boolean,
      lang: string
    }
  ]
}

type Joke = {
  error: boolean,
  category: string,
  type: string,
  joke: string,
  id: number,
  safe: boolean,
  lang: string
}

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<AllCategories, undefined>({
      query: () => '/categories',
    }),
    getJokesByCategory: builder.query<Jokes, string>({
      query: (category) => `/joke/${category}?type=single&amount=10`,
    }),
    getJokeById: builder.query<Joke, string>({
      query: (id) => `/joke/Any?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer } = jokesApi;

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoriesQuery, useGetJokesByCategoryQuery, useGetJokeByIdQuery } = jokesApi;
