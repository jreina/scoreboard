import PullRequestRA from "../resources/PullRequestRA";
import { PullRequestPayload } from "../models/PullRequestPayload";
import { GithubUserEvent } from "../models/GithubUserEvent";

export class PullRequestManager {
  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const prs = await PullRequestRA.list(username);
    return prs.filter(({ payload: { action } }) => action === "opened");
  }
}
