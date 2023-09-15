import "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
/* @ts-ignore */
const processEnv = import.meta.env;
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: processEnv.VITE_API_URL }),
  endpoints: () => ({}),
});

export default api;
