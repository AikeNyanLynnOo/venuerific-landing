import { makeRequest } from "./makeRequest";

export const getVenues = async ({ ENV }: { ENV: any }) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${ENV.API_URL}/landing.json`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
