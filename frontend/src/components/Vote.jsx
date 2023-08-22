import React from 'react';
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Radio, Stack } from "@chakra-ui/react";

export const Vote = () => {

    const handleVote = async () => {

    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', marginTop: '100px' }}>
            <Card w="400px" h="auto">
                <CardHeader textAlign="center">
                    <Heading size="md">Vote for Your Favorite Candidate</Heading>
                </CardHeader>
                <CardBody>
                    <Stack spacing={2}>
                            <Radio
                                key={}
                                size="lg"
                                name="candidate"
                                colorScheme="blue"
                                isChecked={}
                                onChange={() => handleVote()}
                            >
                            </Radio>
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
