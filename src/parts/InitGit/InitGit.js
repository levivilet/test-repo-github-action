import { execa } from "execa";

export const initGit = async ({ gitUserEmail, gitUserName }) => {
  await execa("git", [
    "config",
    "--global",
    "--add",
    "safe.directory",
    "/github/workspace",
  ]);
  await execa("git", ["config", "user.email", gitUserEmail]);
  await execa("git", ["config", "user.name", gitUserName]);
  await execa("git", ["fetch", "origin", "--prune"]);
};
