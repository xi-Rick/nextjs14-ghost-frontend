declare module "@tryghost/helpers" {
  export function readingTime(post: any): string; // Adjust 'post' type as per actual usage
  export function tags(
    post: any,
    options?: { prefix?: string; separator?: string }
  ): string; // Adjust 'post' type as per actual usage
  // Add other functions if needed
}
