import { GithubUserEvent } from "../models/GithubUserEvent";
import { PullRequestPayload } from "../models/PullRequestPayload";
import PullRequestRA from "../resources/PullRequestRA";

export class PullRequestManager {
  async list(username: string): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const prs = await PullRequestRA.list(username);
    return prs.filter(({ payload: {action}}) => action === 'opened')
  }
}
