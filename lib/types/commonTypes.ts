export interface APIResponse {
  status: string | number;
  statusText: string;
  success: boolean;
  message?: string;
  data?: [] | object | null;
}

export interface Font {
  fontFamily: string;
  fontSize: number;
  lineHeight?: string;
  letterSpacing?: string;
}
