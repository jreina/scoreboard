import ParticipantRA from "../resources/ParticipantRA";
import _ from 'lodash';
import { ParticipantSummary } from "../models/ParticipantSummary";
import PullRequestEngine from "../engines/PullRequestEngine";

export class ParticipantManager {
  /**
   * Fetch a list of participants from the jreina/scoreboard-participants repo on Github.
   */
  async list(): Promise<Array<ParticipantSummary>> {
    const participants = await ParticipantRA.list();
    const pullRequests = await Promise.all(participants.map(({ github }) => PullRequestEngine.list(github)));
    const combined = _.zipWith(participants, pullRequests, (participantInfo, prs) => ({ ...participantInfo, prs }));
    return combined;
  }
}
