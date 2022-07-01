import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient({
  ...config,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : sanityClient;
