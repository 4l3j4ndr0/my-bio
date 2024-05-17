import type { APIGatewayProxyHandler } from "aws-lambda";
const axios = require("axios").default;
const headers = {
  "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
  "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
};
export const handler: APIGatewayProxyHandler = async (event: any) => {
  try {
    const credlyUser = event.queryStringParameters.userName;
    if (!credlyUser) {
      return {
        statusCode: 400,
        body: JSON.stringify("The credly userName is requiered."),
      };
    }

    const response = await axios.get(
      `https://www.credly.com/users/${credlyUser}/badges.json`
    );

    let badges = [];
    for (let i = 0; i < response.data.data.length; i++) {
      badges.push({
        image: response.data.data[i].image_url,
        url: `https://www.credly.com/badges/${response.data.data[i].id}/public_url`,
      });
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ badges }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify("Hello from myFunction!"),
  };
};
