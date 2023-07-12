import { Repository } from "./Repository";

export type User = {
  id: string;
  login: string;
  repos: Repository[];
};
