import express from 'express';
import {deleteCandidate, getCandidates, setCandidate, voteCandidate} from "../controllers/candidateController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router()

router.get('/', getCandidates)
router.post('/set', protect, setCandidate)
router.post('/vote', protect, voteCandidate)
router.post('/delete', protect, deleteCandidate)

export default router