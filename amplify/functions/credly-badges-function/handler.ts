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
      const badge = response.data.data[i];
      // Filter out expired badges by checking if it has no expiration_date
      // or if the expiration_date is in the future
      if (
        !badge.expires_at_date ||
        new Date(badge.expires_at_date) > new Date()
      ) {
        badges.push({
          image: badge.image_url,
          url: `https://www.credly.com/badges/${badge.id}/public_url`,
          // Store the badge name for sorting purposes
          name: badge.badge_template?.name || "",
        });
      }
    }

    // Sort badges to prioritize those containing "AWS Certified" in the name
    badges.sort((a, b) => {
      const aHasAWS = a.name.includes("AWS Certified");
      const bHasAWS = b.name.includes("AWS Certified");

      // If one has "AWS Certified" and the other doesn't, prioritize the one with it
      if (aHasAWS && !bHasAWS) return -1;
      if (!aHasAWS && bHasAWS) return 1;

      // If both or neither have "AWS Certified", maintain original order
      return 0;
    });

    // Remove the temporary name property used for sorting
    badges = badges.map(({ image, url }) => ({ image, url }));

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
};
