import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { fetchRepos, fetchUser, searchUsers } from "../services/api";
import { GitHubState } from "../types/GitHubState";
import { Repository } from "../types/Repository";
import { User } from "../types/User";

const initialState: GitHubState = {
  users: [],
  loading: false,
  accordionOpen: null,
  error: "",
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    toggleAccordion: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.accordionOpen = state.accordionOpen === index ? null : index;
    },
    setUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setRepos: (state, action: PayloadAction<Repository[]>) => {
      state.users[state.accordionOpen ?? 0].repos = action.payload ?? [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ?? [];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ?? [];
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.users[state.accordionOpen ?? 0].repos = action.payload ?? [];
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(toggleAccordion, (state, action) => {
        const index = action.payload;
        state.accordionOpen = index === state.accordionOpen ? null : index;
      });
  },
});

export const toggleAccordion = createAction<number>("github/toggleAccordion");

export default githubSlice;
