declare module "next/server.js" {
  export * from "next/server";
}

declare module "next/dist/*" {
  const content: any;
  export default content;
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}
