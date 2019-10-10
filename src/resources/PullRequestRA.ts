import { GithubUserEvent } from "../models/GithubUserEvent";
import { PullRequestPayload } from "../models/PullRequestPayload";
import { conditionalFetch } from "../util/ConditionalFetch";

class PullRequestRA {
  /**
   * List all pull requests for a given user
   * @param username
   */
  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const response = await conditionalFetch(
      `https://api.github.com/users/${username}/events/public`
    );

    const data = (await response) as Array<GithubUserEvent<PullRequestPayload>>;

    const pullRequests = data.filter(({ type }) => type === "PullRequestEvent");
    return pullRequests;
  }
}

export default new PullRequestRA();
