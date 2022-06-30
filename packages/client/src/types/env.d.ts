declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_SANITY_DATASET: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_SANITY_API_VERSION: string;
      SANITY_API_TOKEN: string;
      TWITTER_CLIENT_ID: string;
      TWITTER_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}

export {}
