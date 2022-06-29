import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coordinate } from "../../types";

const coordinatesApi = createApi({
  reducerPath: "coordinatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/coordinates",
  }),
  endpoints: (builder) => ({
    getCoordinates: builder.query<Coordinate[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetCoordinatesQuery } = coordinatesApi;
export default coordinatesApi;
