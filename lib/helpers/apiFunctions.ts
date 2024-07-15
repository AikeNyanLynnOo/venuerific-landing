import { makeRequest } from "./makeRequest";

export const getVenues = async () => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/landing.json`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
