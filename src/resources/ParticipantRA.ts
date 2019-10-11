import { ParticipantSummary } from "../../server/models/ParticipantSummary";

class ParticipantRA {
  async list(): Promise<Array<ParticipantSummary>> {
    const { participants } = await fetch("/api/participants/list").then(x =>
      x.json()
    );
    return participants as Array<ParticipantSummary>;
  }
}

export default new ParticipantRA();
