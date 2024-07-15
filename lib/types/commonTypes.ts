export interface DataObject{
  data?: any;
  message? : string; 
}

export interface APIResponse {
  status: string | number;
  statusText: string;
  success: boolean;
  message?: string;
  data?: DataObject | null;
}

export interface Font {
  fontFamily: string;
  fontSize: number;
  lineHeight?: string;
  letterSpacing?: string;
}
