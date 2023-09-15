import api from "../../lib/api";

const apiWithTag = api.enhanceEndpoints({
  addTagTypes: ["auth"],
});

const AGENT_MICROSERVICE = "http://localhost:8000/api/v1";

const AuthApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    twoFA: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useAuthLoginMutation, useTwoFAMutation } = AuthApi;

export default AuthApi;
