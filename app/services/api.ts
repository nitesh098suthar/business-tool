// app/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Adjust base URL accordingly
  endpoints: (builder) => ({
    getTopss: builder.query<any, void>({
      query: () => "topss",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetTopssQuery } = api;
