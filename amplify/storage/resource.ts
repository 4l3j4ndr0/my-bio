import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "my-bio-awslearn-cloud",
  access: (allow) => ({
    "users/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read", "write", "delete"]),
    ],
  }),
});
