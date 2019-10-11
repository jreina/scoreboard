import { PullRequestPayload } from "../../server/models/PullRequestPayload";
import { GithubUserEvent } from "../../server/models/GithubUserEvent";

class PullRequestRA {
  /**
   * List all pull requests for a given user
   * @param username
   */
  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const response = await fetch(`/api/pull-requests/list/${username}/`);

    const { prs } = (await response.json()) as {
      prs: Array<GithubUserEvent<PullRequestPayload>>;
    };
    return prs;
  }
}

export default new PullRequestRA();
