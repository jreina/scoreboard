import { conditionalFetch } from "../util/ConditionalFetch";
import { PullRequestPayload } from "../models/PullRequestPayload";
import { GithubUserEvent } from "../models/GithubUserEvent";
import moment from 'moment';

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

    const pullRequests = data.filter(({ type }) => type === "PullRequestEvent")
      .filter(({ payload }) => payload.action === 'opened')
      .filter(pr => moment(pr.created_at).month() === 9);
    return pullRequests;
  }
}

export default new PullRequestRA();
