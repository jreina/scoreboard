import { ParticipantInfo } from "../models/ParticipantInfo";

class ParticipantRA {
  async list(): Promise<Array<ParticipantInfo>> {
    const { participants } = await fetch(
      "https://raw.githubusercontent.com/jreina/scoreboard-participants/master/participants.json"
    ).then(x => x.json());
    return participants as Array<ParticipantInfo>;
  }
}

export default new ParticipantRA();
