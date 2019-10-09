import { GithubUserEvent } from "../models/GithubUserEvent";
import { PullRequestPayload } from "../models/PullRequestPayload";

class PullRequestRA {
  /**
   * List all pull requests for a given user
   * @param username
   */
  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const data = (await fetch(
      `https://api.github.com/users/${username}/events/public`
    ).then(x => x.json())) as Array<GithubUserEvent<PullRequestPayload>>;

    const pullRequests = data.filter(({ type }) => type === "PullRequestEvent");
    return pullRequests;
  }
}

export default new PullRequestRA();
