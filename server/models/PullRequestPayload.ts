export interface PullRequestPayload {
  action: string;
  pull_request: {
    url: string;
    html_url: string;
    number: number;
    state: string;
    locked: false;
    title: string;
    body: string;
    created_at: string;
    labels: Array<string>;
  };
  created_at: string;
}
