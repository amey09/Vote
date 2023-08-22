import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    candidates: [],
};

const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        setCandidates: (state, action) => {
            state.candidates = action.payload;
        },
        refreshCandidates: (state) => {
            state.candidates = [];
        },
    },
});

export const { setCandidates, refreshCandidates } = candidateSlice.actions;

export default candidateSlice.reducer;
