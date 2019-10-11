import { Router } from "express";
import { PullRequestManager } from "../managers/PullRequestManager";

const pullRequests = Router();
const manager = new PullRequestManager();

pullRequests.get("/list/:user", async function(req, res) {
  const user = req.params.user;
  try {
    const prs = await manager.list(user);
    return res.json({ prs });
  } catch (ex) {
    return res.json({ prs: [] });
  }
});

export default pullRequests;
