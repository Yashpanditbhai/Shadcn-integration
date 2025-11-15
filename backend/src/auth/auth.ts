import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: "http://localhost:5000",
  emailAndPassword: {
    enabled: true,
  },
});
