import { conditionalFetch } from "../util/ConditionalFetch";
import { PullRequestPayload } from "../models/PullRequestPayload";
import { GithubUserEvent } from "../models/GithubUserEvent";
import moment from "moment";

class PullRequestRA {
  /**
   * List all pull requests for a given user
   * @param username
   */
  async list(
    username: string,
    page: number = 1
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const uri = `https://api.github.com/users/${username}/events/public?page=${page}`;
    const response = await conditionalFetch(uri);

    const pullRequests = (await response) as Array<
      GithubUserEvent<PullRequestPayload>
    >;

    return pullRequests;
  }
}

export default new PullRequestRA();
