import axios from "axios";
import { APIResponse } from "../types/commonTypes";

export const makeRequest = async (config: any): Promise<APIResponse> => {
  try {
    const response = await axios(config);
    return {
      status: response.status,
      statusText: response.statusText,
      success: response.status >= 200 && response.status < 300 ? true : false,
      message: response.statusText || "Custom Message",
      data: response.data || null,
    };
  } catch (error: any) {
    const { status, statusText } = error?.response;
    return {
      status,
      statusText,
      success: false,
      message: statusText || "Unknown Error",
      data: null,
    };
  }
};
