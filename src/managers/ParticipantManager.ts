import ParticipantRA from "../resources/ParticipantRA";

export class ParticipantManager {
  /**
   * Fetch a list of participants from the jreina/scoreboard-participants repo on Github.
   */
  list() {
    return ParticipantRA.list();
  }
}
