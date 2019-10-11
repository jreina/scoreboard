import { Router } from 'express';
import participants from './Participants';
import pullRequests from './PullRequests';

const api = Router();
api.use('/participants', participants);
api.use('/pull-requests', pullRequests);

export default api;
