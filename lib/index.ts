import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "9jy19mp3",
  dataset: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: "2021-10-21",
  useCdn: false,
});


export const builder = imageUrlBuilder({
  projectId: "9jy19mp3",
  dataset: "production",
});