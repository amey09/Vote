import { apiSlice} from "./apiSlice";
const CANDIDATES_URL = '/api/candidates';
export const candidatesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCandidate: builder.query({
            query: () => ({
                url: `${CANDIDATES_URL}`,
                method: 'GET'
            }),
        }),
        setCandidate: builder.mutation({
            query: (data) => ({
                url: `${CANDIDATES_URL}/set`,
                method: 'POST',
                body: data,
            }),
        }),
        newVote: builder.mutation({
            query: (data) => ({
                url: `${CANDIDATES_URL}/vote`,
                method: 'POST',
                body: data,
            }),
        }),
        deleteCandidate: builder.mutation({
            query: (data) => ({
                url: `${CANDIDATES_URL}/delete`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetCandidateQuery,
    useSetCandidateMutation,
    useNewVoteMutation,
    useDeleteCandidateMutation,
} = candidatesApiSlice