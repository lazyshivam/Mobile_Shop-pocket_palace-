import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL='http://localhost:8080'
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,credentials:'include'}), // Adjust the base URL accordingly
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => 'auth/profile',
    }),
    
   
  }),
});

export const  {
    useGetProfileQuery,

} = baseApi;
