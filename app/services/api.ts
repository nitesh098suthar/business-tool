import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Adjust base URL accordingly
  endpoints: (builder) => ({
    getTopss: builder.query<any, void>({
      query: () => "topss",
    }),
    addTop: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: 'topss',
        method: 'POST',
        body: formData,
      }),
    }),
    // Fetch a single Top by ID
    getTopById: builder.query<any, string>({
      query: (id) => `topss/${id}`,  // GET top by ID
    }),
    // Update a Top by ID
    updateTop: builder.mutation<any, { id: string, formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `topss/${id}`, // PUT top by ID
        method: 'PUT',
        body: formData,
      }),
    }),
    // Delete a Top by ID
    deleteTop: builder.mutation<any, string>({
      query: (id) => ({
        url: `topss/${id}`, // DELETE top by ID
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetTopssQuery,
  useAddTopMutation,
  useGetTopByIdQuery,
  useUpdateTopMutation,
  useDeleteTopMutation,
} = api;
