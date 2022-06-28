import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getMsg: builder.query<{ message: string }, void>({
      query: () => "",
    }),
  }),
});

export const { useGetMsgQuery } = api;
export default api;
