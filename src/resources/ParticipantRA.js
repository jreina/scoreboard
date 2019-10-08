class ParticipantRA {
  async list() {
    const { participants } = await fetch(
      "https://raw.githubusercontent.com/jreina/scoreboard-participants/master/participants.json"
    ).then(x => x.json());
    return participants;
  }
  async load(username) {
    const data = await fetch(
        `https://api.github.com/users/${username}/events/public`
      ).then(x => x.json());
      console.log(data);
      return data;
  }
}

export default new ParticipantRA();
