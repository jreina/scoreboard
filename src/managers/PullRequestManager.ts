import PullRequestRA from "../resources/PullRequestRA";

export class PullRequestManager {
  async list(
    username: string
  ) {
    return PullRequestRA.list(username);
  }
}
