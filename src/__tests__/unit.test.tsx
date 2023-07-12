import { fetchRepos, fetchUser, searchUsers } from "../services/api";

describe("githubSlice", () => {
  it("should fetch users", async () => {
    const users = await fetchUser();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
  });

  it("should search users", async () => {
    const users = await searchUsers("bar");
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
  });

  it("should fetch repos", async () => {
    const repos = await fetchRepos("bar");
    expect(repos).toBeDefined();
    expect(repos.length).toBeGreaterThan(0);
  });
});
