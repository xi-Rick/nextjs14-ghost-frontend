// /types/tryghost-admin-api.d.ts
declare module "@tryghost/admin-api" {
  import { GhostAdminAPIOptions } from "@tryghost/admin-api";

  // Extend GhostAdminAPIOptions interface to include version property
  interface GhostAdminAPIOptions extends GhostAdminAPIOptions {
    version: string;
  }

  // Define interfaces for members
  interface Member {
    id: string;
    name: string;
    email: string;
    created_at: string; // You might want to use a Date type if handling dates
    updated_at: string; // You might want to use a Date type if handling dates
    subscribed: boolean;
    labels: string[];
    // Add more properties as needed based on your application's requirements
  }

  interface MembersAPI {
    browse(options?: { limit?: number; page?: number }): Promise<Member[]>;
    read(memberId: string): Promise<Member>;
    edit(memberId: string, data: Partial<Member>): Promise<Member>;
    add(data: Partial<Member>): Promise<Member>;
  }

  export default class GhostAdminAPI {
    constructor(options: GhostAdminAPIOptions);
    posts: PostsAPI;
    authors: AuthorsAPI;
    tags: TagsAPI;
    members: MembersAPI; // Include members API in the GhostAdminAPI class
    // Add other APIs as needed
  }
}
