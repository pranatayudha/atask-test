import { User } from "./User";

export type GitHubState = {
  users: User[];
  loading: boolean;
  accordionOpen: number | null;
  error: string;
};
