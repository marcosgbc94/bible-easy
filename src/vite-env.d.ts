/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_JSON_DATA_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}