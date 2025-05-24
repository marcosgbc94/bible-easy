/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_JSON_DATA_PATH: string;
  VITE_ENABLE_LOGS: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}