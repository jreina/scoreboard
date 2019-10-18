import PullRequestRA from "../resources/PullRequestRA";
import moment from "moment";
import { GithubUserEvent } from "../models/GithubUserEvent";
import { PullRequestPayload } from "../models/PullRequestPayload";

class PullRequestEngine {
  private _currentYear = new Date().getFullYear();

  async list(
    username: string
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const data = await this._listR(username, 1, []);

    const targetPrs = data
      .filter(({ type }) => type === "PullRequestEvent")
      .filter(({ payload }) => payload.action === "opened")
      .filter(pr => moment(pr.created_at).month() === 9);

    return targetPrs;
  }

  private async _listR(
    username: string,
    page: number,
    prs: Array<GithubUserEvent<PullRequestPayload>>
  ): Promise<Array<GithubUserEvent<PullRequestPayload>>> {
    const data = await PullRequestRA.list(username, page);

    if (data.length < 30) {
      return prs.concat(data);
    }

    if (
      data.every(item => {
        const itemDate = moment(item.created_at);
        return itemDate.month() >= 9 && itemDate.year() === this._currentYear;
      })
    ) {
      return this._listR(username, page + 1, prs.concat(data));
    }

    return prs.concat(data);
  }
}

export default new PullRequestEngine();
