import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a.model({
    id: a.id().required(),
    image: a.string().required(),
    fullName: a.string().required(),
    jobOcupation: a.string().required(),
    bio: a.string().required(),
    socialNetwork: a.string().array(),
    credlyUsername: a.string(),
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
