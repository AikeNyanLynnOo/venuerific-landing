export interface APIResponse {
  status: string | number;
  statusText: string;
  success: boolean;
  message?: string;
  data?: [] | object | null;
}
