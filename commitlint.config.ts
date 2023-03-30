import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["jira"],
  plugins: ["commitlint-plugin-jira-rules"],
  helpUrl: "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

module.exports = Configuration;
