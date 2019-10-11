import { Router } from "express";
import { ParticipantManager } from "../managers/ParticipantManager";

const participants = Router();
const manager = new ParticipantManager();

participants.get("/list", async function(req, res) {
  const participantsList = await manager.list();
  return res.json({ participants: participantsList });
});

export default participants;
