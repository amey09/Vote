import express from 'express';
import {deleteCandidate, getCandidates, setCandidate, voteCandidate} from "../controllers/candidateController.js";
const router = express.Router()

router.get('/', getCandidates)
router.post('/set', setCandidate)
router.post('/vote', voteCandidate)
router.post('/delete', deleteCandidate)

export default router