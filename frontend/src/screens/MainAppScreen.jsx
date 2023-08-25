import React from 'react';
import { Center, VStack } from '@chakra-ui/react';
import ViewVotes from '../components/ViewVotes';
import { useGetCandidateQuery } from "../slices/candidatesApiSlice";
import AdminDashboard from "../components/adminDashboard";
import Vote from "../components/Vote";

const MainAppScreen = () => {
    const { data: candidates } = useGetCandidateQuery();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return (
        <Center marginTop={'10'}>
            <VStack>
                {!isAdmin && <Vote candidates={candidates || []} />}
                {isAdmin && <ViewVotes candidates={candidates || []} />}
                {isAdmin && <AdminDashboard />}
            </VStack>
        </Center>
    );
};

export default MainAppScreen;
