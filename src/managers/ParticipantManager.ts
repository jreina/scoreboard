import ParticipantRA from '../resources/ParticipantRA';
import { ParticipantEngine } from '../engines/ParticipantEngine';

export class ParticipantManager {
    list() {
        return ParticipantRA.list();
    }
}