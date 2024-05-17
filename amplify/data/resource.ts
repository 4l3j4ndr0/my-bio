import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      id: a.id().required(),
      image: a.string().required(),
      email: a.string().required(),
      fullName: a.string().required(),
      subdomain: a.string().required(),
      jobOcupation: a.string().required(),
      bio: a.string().required(),
      socialNetwork: a.string().array(),
      credlyUsername: a.string(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow
        .authenticated("userPools")
        .to(["create", "get", "list", "update", "delete"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      description: "This is the API key if for request Publics.",
      expiresInDays: 30,
    },
  },
});
