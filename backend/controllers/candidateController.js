import Candidate from "../models/candidateModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// @desc    Get Candidates
// @route   GET /api/candidates
// @access  Private
const getCandidates = asyncHandler(async (req, res) => {
    const candidates = await Candidate.find();

    if (candidates.length === 0) {
        res.status(404)
        throw new Error('No candidates available')
    }
    res.status(201).json(candidates)
});

// @desc    Set Candidates
// @route   Post /api/candidates/set
// @access  Private
const setCandidate = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    try {
        const existingCandidate = await Candidate.findOne({ email });

        if (existingCandidate) {
            return res.status(400).json({ error: 'Candidate already exists' });
        }

        const newCandidate = new Candidate({
            name,
            email,
            votes: 0,
            voters: [],
        });

        await newCandidate.save();

        return res.status(201).json({ message: 'Candidate generated successfully', candidate: newCandidate });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// @desc    Vote Candidate
// @route   Post /api/candidates/vote
// @access  Private
const voteCandidate = asyncHandler(async (req, res) => {
    const candidateEmail = req.body.email;
    const user_email = req.body.userEmail;

    try {
        const candidate = await Candidate.findOne({ email: candidateEmail });
        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        if (candidate.voters.includes(user_email)) {
            console.log(user_email)
            return res.status(400).json({ error: 'You have already voted for this candidate' });
        }

        candidate.votes += 1;
        candidate.voters.push(user_email)

        await candidate.save();

        await User.updateOne({ email: user_email }, { $set: { "hasVoted": true } });

        const updatedUser = await User.findOne({ email: user_email });

        return res.json({ message: 'Vote counted successfully', user: updatedUser });

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});


// @desc    Delete Candidate
// @route   Post /api/candidates/delete
// @access  Private
const deleteCandidate = asyncHandler(async (req, res) => {
    const candidateEmail = req.body.email;
    const candidate = await Candidate.findOne({ email: candidateEmail });
    if (!candidate) {
        res.status(404)
        throw new Error('Candidate not found')
    }
    await candidate.deleteOne();
    res.status(200).json({ message: 'Candidate deleted successfully' });
});


export { getCandidates, setCandidate, voteCandidate, deleteCandidate }
