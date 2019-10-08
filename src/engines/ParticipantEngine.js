import ParticipantRA from "../resources/ParticipantRA";


export class ParticipantEngine {
    static async getPullRequestCount(username) {
        const userEvents = await ParticipantRA.load(username);
        const pullRequests = userEvents.filter(({ type }) => type === 'PullRequestEvent');
        const opened = pullRequests.filter(({ payload: {action} }) => action === "opened");
        
        return opened.length;
    }
}