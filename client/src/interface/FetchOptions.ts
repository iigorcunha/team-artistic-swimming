export interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  credentials: RequestCredentials;
}
export interface FetchOptionsUploadFile {
  method: string;
  headers?: {
    'Content-Type': string;
    'Access-Control-Allow-Origin': string;
  };
  body: FormData;
  mode: RequestMode;
  credentials: RequestCredentials;
}
