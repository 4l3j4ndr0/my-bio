import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  AuthorizationType,
  CognitoUserPoolsAuthorizer,
  Cors,
  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";
import { CredlyBadgesFunction } from "./functions/credly-badges-function/resource";
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage,
  CredlyBadgesFunction,
});

const apiStack = backend.createStack("api-stack");

const BioRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "BioRestApi",
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

const lambdaIntegration = new LambdaIntegration(
  backend.CredlyBadgesFunction.resources.lambda
);

const itemsPath = BioRestApi.root.addResource("badges", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

itemsPath.addMethod("GET", lambdaIntegration);

backend.addOutput({
  custom: {
    API: {
      [BioRestApi.restApiName]: {
        endpoint: BioRestApi.url,
        region: Stack.of(BioRestApi).region,
        apiName: BioRestApi.restApiName,
      },
    },
  },
});
