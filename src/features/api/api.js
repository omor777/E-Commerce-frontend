import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
