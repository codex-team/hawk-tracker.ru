/**
 * Type definition for svg imports
 */
declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
