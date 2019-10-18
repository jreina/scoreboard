import { timer, Observable } from "rxjs";
import { concatMap } from "rxjs/operators";
import { ParticipantManager } from "./ParticipantManager";
import { ParticipantSummary } from "../../server/models/ParticipantSummary";

export class AppManager {
  private static participantMgr: ParticipantManager = new ParticipantManager();
  public static participants: Observable<Array<ParticipantSummary>> = timer(
    0,
    60000
  ).pipe(concatMap(AppManager.participantMgr.list));
}
