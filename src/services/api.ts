import { createAsyncThunk } from "@reduxjs/toolkit";
import githubSlice from "../store/githubSlice";
import { Repository } from "../types/Repository";
import { User } from "../types/User";

export const fetchUser = createAsyncThunk<User[] | undefined, void>(
  "github/fetchUser",
  async (_, { dispatch }) => {
    try {
      const response = await fetch("https://api.github.com/users");
      const responseBody = await response.json();

      const users: User[] = responseBody.map((user: any) => ({
        id: user.id.toString(),
        login: user.login,
        repos: [],
      }));
      dispatch(githubSlice.actions.setUser(users));
      return users;
    } catch (error) {
      throw error;
    }
  }
);

export const searchUsers = createAsyncThunk<User[] | undefined, string>(
  "github/searchUsers",
  async (username: string, { dispatch }) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );
      const responseBody = await response.json();

      const users: User[] = responseBody.items.map((user: any) => ({
        id: user.id.toString(),
        login: user.login,
        repos: [],
      }));
      dispatch(githubSlice.actions.setUser(users));
      return users;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchRepos = createAsyncThunk<Repository[] | undefined, string>(
  "github/fetchRepos",
  async (username: string, { dispatch }) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const responseBody = await response.json();

      const repos: Repository[] = responseBody.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
      }));
      dispatch(githubSlice.actions.setRepos(repos));
      return repos;
    } catch (error) {
      throw error;
    }
  }
);
