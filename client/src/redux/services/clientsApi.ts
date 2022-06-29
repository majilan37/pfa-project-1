import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Client } from "../../types";

const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/coordinates",
  }),
  endpoints: (builder) => ({
    getClients: builder.query<{ message: string }, void>({
      query: () => "/",
    }),
    createClient: builder.mutation<void, Omit<Client, "id">>({
      query: (client) => ({
        method: "POST",
        url: "/create",
        body: client,
      }),
    }),
  }),
});

export const { useGetClientsQuery, useCreateClientMutation } = clientsApi;
export default clientsApi;
