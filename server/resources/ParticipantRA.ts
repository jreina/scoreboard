import { ParticipantInfo } from "../models/ParticipantInfo";
import { conditionalFetch } from "../util/ConditionalFetch";

class ParticipantRA {
  async list(): Promise<Array<ParticipantInfo>> {
    const { participants } = await conditionalFetch(
      "http://hacktoberfest-participants.johnnyreina.com/participants.json"
    );
    return participants as Array<ParticipantInfo>;
  }
}

export default new ParticipantRA();
