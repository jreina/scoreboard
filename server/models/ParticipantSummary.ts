import { GithubUserEvent } from "./GithubUserEvent";
import { PullRequestPayload } from "./PullRequestPayload";

export interface ParticipantSummary {
    prs: GithubUserEvent<PullRequestPayload>[];
    name: string;
    github: string;
    twitter: string;
}