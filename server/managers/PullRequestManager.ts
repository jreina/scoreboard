import { PullRequestPayload } from "../models/PullRequestPayload";
import { GithubUserEvent } from "../models/GithubUserEvent";
import PullRequestEngine from "../engines/PullRequestEngine";

export class PullRequestManager {
  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const prs = await PullRequestEngine.list(username);
    return prs.filter(({ payload: { action } }) => action === "opened");
  }
}
