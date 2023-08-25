import React, { useState, useEffect } from 'react';
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Radio, Stack } from "@chakra-ui/react";
import { useNewVoteMutation } from "../slices/candidatesApiSlice";

export const Vote = ({ candidates }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [newVote, { isLoading }] = useNewVoteMutation();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setHasVoted(userInfo?.hasVoted || false);
    }, []);

    const handleVote = async (candidateId) => {

        if (isLoading) {
            return;
        }

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const user_email = userInfo ? userInfo.email : null;

        try {
            const mutationData = { email: candidateId, userEmail: user_email };
            const response = await newVote(mutationData);

            if (response.data && response.data.user) {
                setSelectedCandidate(candidateId);
                setHasVoted(true);

                localStorage.setItem('userInfo', JSON.stringify({
                    ...userInfo,
                    hasVoted: true
                }));
            } else {
                console.error("Voting failed");
            }
        } catch (error) {
            console.error("Error voting:", error);
        }
    };

    if (hasVoted) {
        return (
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', marginTop: '100px' }}>
                <Card w="400px" h="auto">
                    <CardHeader textAlign="center">
                        <Heading size="md">You have already voted!</Heading>
                    </CardHeader>
                    <CardBody>
                        <Heading textAlign="center">Thank you for voting!</Heading>
                    </CardBody>
                </Card>
            </Box>
        );
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', marginTop: '100px' }}>
            <Card w="400px" h="auto">
                <CardHeader textAlign="center">
                    <Heading size="md">Vote for Your Favorite Candidate</Heading>
                </CardHeader>
                <CardBody>
                    <Stack spacing={2}>
                        {candidates.map(candidate => (
                            <Radio
                                key={candidate.email}
                                size="lg"
                                name="candidate"
                                colorScheme="blue"
                                isChecked={selectedCandidate === candidate.email}
                                onChange={() => handleVote(candidate.email)}
                            >
                                {candidate.name}
                            </Radio>
                        ))}
                    </Stack>
                </CardBody>
                <CardFooter textAlign="center">
                    You can only vote once, be mindful
                </CardFooter>
            </Card>
        </Box>
    );
};

export default Vote;